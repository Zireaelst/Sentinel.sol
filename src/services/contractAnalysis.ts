import type { ApiKeys, ExplorerApis, SecurityReport, SupportedChain } from '../types';

// ÖNEMLİ: Bu API anahtarlarını kendi aldığınız anahtarlarla değiştirin
export const API_KEYS: ApiKeys = {
  ethereum: "YOUR_ETHERSCAN_API_KEY",
  bsc: "YOUR_BSCSCAN_API_KEY", 
  polygon: "YOUR_POLYGONSCAN_API_KEY",
  gemini: "YOUR_GEMINI_API_KEY" // Google AI Studio'dan alın
};

export const EXPLORER_APIS: ExplorerApis = {
  ethereum: "https://api.etherscan.io/api",
  bsc: "https://api.bscscan.com/api", 
  polygon: "https://api.polygonscan.com/api"
};

export class ContractAnalysisService {
  async fetchSourceCode(address: string, chain: SupportedChain): Promise<string> {
    const apiUrl = `${EXPLORER_APIS[chain]}?module=contract&action=getsourcecode&address=${address}&apikey=${API_KEYS[chain]}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.status === "1" && data.result[0].SourceCode) {
      return data.result[0].SourceCode;
    } else {
      throw new Error("Kontrat kaynağı bulunamadı. Adresin doğru olduğundan ve kontratın ilgili explorer'da doğrulandığından (verified) emin olun.");
    }
  }

  async getAISecurityReport(sourceCode: string): Promise<SecurityReport> {
    const prompt = `
      TASK: Act as a senior Web3 security auditor. Analyze the following Solidity smart contract source code.
      
      OBJECTIVE: Identify potential security vulnerabilities, centralization risks, and other logical issues. Then, provide a structured JSON report for a semi-technical user.

      VULNERABILITIES TO CHECK FOR (but not limited to):
      - Re-entrancy
      - Integer overflow/underflow
      - Unchecked external calls
      - Gas limit issues
      - Access control problems (e.g., unprotected functions with critical logic, over-powered owner)
      - Centralization risks (e.g., owner can drain funds, pausable contracts)
      - Use of deprecated or unsafe Solidity features.
      - Potentially malicious logic or "rug pull" functions.

      REQUIRED JSON OUTPUT FORMAT:
      You MUST respond with ONLY a valid JSON object. Do not include "json" or backticks at the beginning or end. The JSON object must have the following structure:
      {
        "riskLevel": "Low" | "Medium" | "High",
        "summary": "A brief, one or two-sentence summary of the contract's overall security posture.",
        "findings": [
          {
            "title": "Clear and concise title of the finding (e.g., 'Re-entrancy Risk in withdraw()')",
            "description": "A simple explanation of the vulnerability, what it means for a user, and where it is in the code."
          }
        ]
      }

      RULES:
      1.  Your entire response must be a single, valid JSON object.
      2.  \`riskLevel\` must be one of "Low", "Medium", or "High".
      3.  \`summary\` should be easy to understand.
      4.  \`findings\` should be an array. If no specific vulnerabilities are found, return an empty array [].
      5.  All text in the JSON response MUST be in Turkish.

      Here is the smart contract source code to analyze:
      \`\`\`solidity
      ${sourceCode}
      \`\`\`
    `;

    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEYS.gemini}`;
    
    const payload = { contents: [{ parts: [{ text: prompt }] }] };

    const response = await fetch(geminiApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Gemini API hatası: ${response.status} ${response.statusText}. Detay: ${errorBody}`);
    }

    const result = await response.json();
    
    try {
      const rawText = result.candidates[0].content.parts[0].text;
      // AI'dan gelebilecek markdown formatını temizle
      const cleanJsonText = rawText.replace(/^```json\n|```$/g, '');
      return JSON.parse(cleanJsonText);
    } catch (e) {
      console.error("AI'dan gelen JSON parse edilemedi:", e);
      console.error("Ham AI Cevabı:", result.candidates[0].content.parts[0].text);
      throw new Error("AI, beklenmedik bir formatta yanıt verdi. Lütfen tekrar deneyin.");
    }
  }

  async analyzeContract(address: string, chain: SupportedChain): Promise<SecurityReport> {
    const sourceCode = await this.fetchSourceCode(address, chain);
    return await this.getAISecurityReport(sourceCode);
  }
}

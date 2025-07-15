import type { SecurityReport, SupportedChain, ChainConfig } from '../types';

// Environment variables'dan API anahtarlarını al
const ETHERSCAN_API_KEY = import.meta.env.VITE_ETHERSCAN_API_KEY || "";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
const ETHERSCAN_V2_API_URL = import.meta.env.VITE_ETHERSCAN_V2_API_URL || "https://api.etherscan.io/v2/api";

// Chain configurations with V2 API support
export const CHAIN_CONFIGS: Record<SupportedChain, ChainConfig> = {
  ethereum: {
    id: 1,
    name: 'ethereum',
    displayName: 'Ethereum',
    explorer: 'https://etherscan.io'
  },
  bsc: {
    id: 56,
    name: 'bsc',
    displayName: 'BNB Chain',
    explorer: 'https://bscscan.com'
  },
  polygon: {
    id: 137,
    name: 'polygon',
    displayName: 'Polygon',
    explorer: 'https://polygonscan.com'
  },
  arbitrum: {
    id: 42161,
    name: 'arbitrum',
    displayName: 'Arbitrum One',
    explorer: 'https://arbiscan.io'
  },
  base: {
    id: 8453,
    name: 'base',
    displayName: 'Base',
    explorer: 'https://basescan.org'
  },
  optimism: {
    id: 10,
    name: 'optimism',
    displayName: 'Optimism',
    explorer: 'https://optimistic.etherscan.io'
  },
  scroll: {
    id: 534352,
    name: 'scroll',
    displayName: 'Scroll',
    explorer: 'https://scrollscan.com'
  },
  blast: {
    id: 81457,
    name: 'blast',
    displayName: 'Blast',
    explorer: 'https://blastscan.io'
  }
};

// API anahtarlarının varlığını kontrol et
const validateApiKeys = (): void => {
  if (!ETHERSCAN_API_KEY) {
    throw new Error("Etherscan API anahtarı bulunamadı. Lütfen .env dosyasında VITE_ETHERSCAN_API_KEY'i ayarlayın.");
  }
  if (ETHERSCAN_API_KEY === "YOUR_ETHERSCAN_API_KEY" || ETHERSCAN_API_KEY === "R7Y8WMZIUK69H3FFZAMP59VWW992ARZ58F") {
    console.warn("⚠️ GÜVENLIK UYARISI: Demo API anahtarı kullanılıyor. Production için kendi anahtarınızı .env dosyasına ekleyin.");
  }
};

const validateGeminiApiKey = (): void => {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini AI API anahtarı bulunamadı. Lütfen .env dosyasında VITE_GEMINI_API_KEY'i ayarlayın.");
  }
  if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY" || GEMINI_API_KEY === "AIzaSyARYTXOEnVjXbiUTiEkK2x-rYTpaLirrqc") {
    console.warn("⚠️ GÜVENLIK UYARISI: Demo API anahtarı kullanılıyor. Production için kendi anahtarınızı .env dosyasına ekleyin.");
  }
};

export class ContractAnalysisService {
  async fetchSourceCode(address: string, chain: SupportedChain): Promise<string> {
    validateApiKeys();
    
    const chainConfig = CHAIN_CONFIGS[chain];
    if (!chainConfig) {
      throw new Error(`Desteklenmeyen zincir: ${chain}`);
    }

    // Etherscan V2 API URL with chain ID
    const apiUrl = `${ETHERSCAN_V2_API_URL}?chainid=${chainConfig.id}&module=contract&action=getsourcecode&address=${address}&apikey=${ETHERSCAN_API_KEY}`;
    
    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API isteği başarısız: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.status === "1" && data.result && data.result[0] && data.result[0].SourceCode) {
        return data.result[0].SourceCode;
      } else {
        throw new Error(`Kontrat kaynağı bulunamadı. Adresin doğru olduğundan ve kontratın ${chainConfig.displayName} ağında doğrulandığından (verified) emin olun.`);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Kontrat kaynağını alırken bilinmeyen bir hata oluştu.");
    }
  }

  async getAISecurityReport(sourceCode: string): Promise<SecurityReport> {
    validateGeminiApiKey();
    
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

    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    
    const payload = { contents: [{ parts: [{ text: prompt }] }] };

    try {
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
      
      if (!result.candidates || !result.candidates[0] || !result.candidates[0].content) {
        throw new Error("Gemini API'dan beklenmedik yanıt formatı alındı.");
      }
      
      const rawText = result.candidates[0].content.parts[0].text;
      // AI'dan gelebilecek markdown formatını temizle
      const cleanJsonText = rawText.replace(/^```json\s*|\s*```$/g, '').trim();
      
      return JSON.parse(cleanJsonText);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error("AI'dan gelen JSON parse edilemedi:", error);
        throw new Error("AI, beklenmedik bir formatta yanıt verdi. Lütfen tekrar deneyin.");
      }
      
      if (error instanceof Error) {
        throw error;
      }
      
      throw new Error("AI analizi sırasında bilinmeyen bir hata oluştu.");
    }
  }

  async analyzeContract(address: string, chain: SupportedChain): Promise<SecurityReport> {
    const sourceCode = await this.fetchSourceCode(address, chain);
    return await this.getAISecurityReport(sourceCode);
  }
}

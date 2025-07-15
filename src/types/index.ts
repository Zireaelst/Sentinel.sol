export interface SecurityReport {
  riskLevel: 'Low' | 'Medium' | 'High';
  summary: string;
  findings: SecurityFinding[];
}

export interface SecurityFinding {
  title: string;
  description: string;
}

export interface ApiKeys {
  ethereum: string;
  bsc: string;
  polygon: string;
  gemini: string;
}

export interface ExplorerApis {
  ethereum: string;
  bsc: string;
  polygon: string;
}

export type SupportedChain = 'ethereum' | 'bsc' | 'polygon';

export interface AnalysisState {
  isLoading: boolean;
  error: string | null;
  report: SecurityReport | null;
}

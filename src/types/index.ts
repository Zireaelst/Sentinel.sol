export interface SecurityReport {
  riskLevel: 'Low' | 'Medium' | 'High';
  summary: string;
  findings: SecurityFinding[];
}

export interface SecurityFinding {
  title: string;
  description: string;
}

export interface ChainConfig {
  id: number;
  name: string;
  displayName: string;
  explorer: string;
}

export type SupportedChain = 'ethereum' | 'bsc' | 'polygon' | 'arbitrum' | 'base' | 'optimism' | 'scroll' | 'blast';

export interface AnalysisState {
  isLoading: boolean;
  error: string | null;
  report: SecurityReport | null;
}

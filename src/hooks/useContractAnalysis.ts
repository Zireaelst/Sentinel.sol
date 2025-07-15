import { useState } from 'react';
import type { AnalysisState, SupportedChain } from '../types';
import { ContractAnalysisService } from '../services/contractAnalysis';

export const useContractAnalysis = () => {
  const [state, setState] = useState<AnalysisState>({
    isLoading: false,
    error: null,
    report: null,
  });

  const analysisService = new ContractAnalysisService();

  const analyzeContract = async (address: string, chain: SupportedChain) => {
    setState({ isLoading: true, error: null, report: null });

    try {
      const report = await analysisService.analyzeContract(address, chain);
      setState({ isLoading: false, error: null, report });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Bilinmeyen bir hata oluştu';
      setState({ isLoading: false, error: errorMessage, report: null });
    }
  };

  const resetState = () => {
    setState({ isLoading: false, error: null, report: null });
  };

  return {
    ...state,
    analyzeContract,
    resetState,
  };
};

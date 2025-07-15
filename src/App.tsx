import React from 'react';
import { useContractAnalysis } from './hooks/useContractAnalysis';
import { ContractInput } from './components/ContractInput';
import { InitialState } from './components/InitialState';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { SecurityReportComponent } from './components/SecurityReport';
import { SecurityWarning } from './components/SecurityWarning';
import type { SupportedChain } from './types';

function App() {
  const { isLoading, error, report, analyzeContract } = useContractAnalysis();
  const [lastAnalyzedAddress, setLastAnalyzedAddress] = React.useState('');

  const handleAnalyze = (address: string, chain: SupportedChain) => {
    setLastAnalyzedAddress(address);
    analyzeContract(address, chain);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }
    
    if (error) {
      return <ErrorState message={error} />;
    }
    
    if (report) {
      return (
        <SecurityReportComponent 
          report={report} 
          contractAddress={lastAnalyzedAddress} 
        />
      );
    }
    
    return <InitialState />;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-gray-200">
      <SecurityWarning />
      
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
          Sentinel.sol
        </h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Paste a smart contract address and watch Gemini AI analyze potential security risks in seconds.
        </p>
      </div>

      <div className="w-full max-w-3xl glass-card rounded-2xl p-6 md:p-8 shadow-2xl">
        <ContractInput 
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
        />
        
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>

      <footer className="text-center text-gray-600 mt-8 text-sm">
        <p>ZetaChain & Google Cloud Buildathon | Powered by Gemini AI</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import type { SupportedChain } from '../types';
import { CHAIN_CONFIGS } from '../services/contractAnalysis';

interface ContractInputProps {
  onAnalyze: (address: string, chain: SupportedChain) => void;
  isLoading: boolean;
  className?: string;
}

export const ContractInput: React.FC<ContractInputProps> = ({ 
  onAnalyze, 
  isLoading,
  className = '' 
}) => {
  const [address, setAddress] = useState('');
  const [chain, setChain] = useState<SupportedChain>('ethereum');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    
    if (!address.startsWith('0x') || address.length !== 42) {
      alert('Please enter a valid smart contract address (must start with 0x and be 42 characters long).');
      return;
    }

    onAnalyze(address.trim(), chain);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-gray-900 bg-opacity-80 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
          placeholder="0x... Smart Contract Address"
          disabled={isLoading}
        />
        
        <select
          value={chain}
          onChange={(e) => setChain(e.target.value as SupportedChain)}
          className="w-full sm:w-auto bg-gray-900 bg-opacity-80 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          disabled={isLoading}
        >
          {Object.entries(CHAIN_CONFIGS).map(([key, config]) => (
            <option key={key} value={key}>
              {config.displayName}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="w-full sm:w-auto shine-button bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex-shrink-0"
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  );
};

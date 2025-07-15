import React, { useState } from 'react';
import type { SupportedChain } from '../types';

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
      alert('Lütfen geçerli bir akıllı kontrat adresi girin (0x ile başlamalı ve 42 karakter olmalı).');
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
          className="w-full bg-gray-900/80 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-gray-500"
          placeholder="0x... Akıllı Kontrat Adresi"
          disabled={isLoading}
        />
        
        <select
          value={chain}
          onChange={(e) => setChain(e.target.value as SupportedChain)}
          className="w-full sm:w-auto bg-gray-900/80 border border-gray-700 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          disabled={isLoading}
        >
          <option value="ethereum">Ethereum</option>
          <option value="bsc">BNB Chain</option>
          <option value="polygon">Polygon</option>
        </select>

        <button
          type="submit"
          disabled={isLoading || !address.trim()}
          className="w-full sm:w-auto shine-button bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex-shrink-0"
        >
          {isLoading ? 'Analiz Ediliyor...' : 'Analiz Et'}
        </button>
      </div>
    </form>
  );
};

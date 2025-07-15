import React from 'react';

export const SecurityWarning: React.FC = () => {
  const etherscanKey = import.meta.env.VITE_ETHERSCAN_API_KEY;
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  const isDemoKey = 
    etherscanKey === "YOUR_ETHERSCAN_API_KEY" || 
    etherscanKey === "R7Y8WMZIUK69H3FFZAMP59VWW992ARZ58F" ||
    geminiKey === "YOUR_GEMINI_API_KEY" ||
    geminiKey === "AIzaSyARYTXOEnVjXbiUTiEkK2x-rYTpaLirrqc";

  if (!isDemoKey) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 bg-yellow-900 bg-opacity-20 border border-yellow-500 border-opacity-50 rounded-lg p-3 text-sm">
      <div className="flex items-center gap-2 text-yellow-300">
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">Demo Modu:</span>
        <span>Örnek API anahtarları kullanılıyor. Production için kendi anahtarlarınızı .env dosyasına ekleyin.</span>
      </div>
    </div>
  );
};

import React from 'react';

interface InitialStateProps {
  className?: string;
}

export const InitialState: React.FC<InitialStateProps> = ({ className = '' }) => {
  return (
    <div className={`text-center py-10 border-2 border-dashed border-gray-700 rounded-xl ${className}`}>
      <svg 
        className="mx-auto h-12 w-12 text-gray-500" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-white">Analysis Report Will Appear Here</h3>
      <p className="mt-1 text-sm text-gray-400">Enter a contract address to get started.</p>
    </div>
  );
};

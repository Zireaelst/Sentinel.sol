import React from 'react';

interface ErrorStateProps {
  message: string;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, className = '' }) => {
  return (
    <div className={`text-center py-10 bg-red-900 bg-opacity-20 border border-red-500 border-opacity-30 rounded-xl ${className}`}>
      <svg 
        className="mx-auto h-12 w-12 text-red-400" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
        />
      </svg>
      <h3 className="mt-2 text-lg font-semibold text-red-300">Bir Hata Oluştu</h3>
      <p className="mt-1 text-sm text-red-400">{message}</p>
    </div>
  );
};

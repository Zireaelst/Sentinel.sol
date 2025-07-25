import React from 'react';
import type { SecurityReport } from '../types';

interface SecurityReportComponentProps {
  report: SecurityReport;
  contractAddress: string;
  className?: string;
}

export const SecurityReportComponent: React.FC<SecurityReportComponentProps> = ({ 
  report, 
  contractAddress,
  className = '' 
}) => {
  const getRiskStyle = (riskLevel: string) => {
    switch (riskLevel.toLowerCase()) {
      case 'low':
        return {
          cardClass: 'bg-green-900 bg-opacity-30 border border-green-500 border-opacity-50',
          textClass: 'text-green-300'
        };
      case 'medium':
        return {
          cardClass: 'bg-yellow-900 bg-opacity-30 border border-yellow-500 border-opacity-50',
          textClass: 'text-yellow-300'
        };
      case 'high':
        return {
          cardClass: 'bg-red-900 bg-opacity-30 border border-red-500 border-opacity-50',
          textClass: 'text-red-300'
        };
      default:
        return {
          cardClass: 'bg-gray-900 bg-opacity-30 border border-gray-500 border-opacity-50',
          textClass: 'text-gray-300'
        };
    }
  };

  const riskStyle = getRiskStyle(report.riskLevel);

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-bold text-white">Security Analysis Report</h2>
        <p className="text-sm text-gray-500 font-mono break-all">{contractAddress}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-4 rounded-xl flex flex-col items-center justify-center text-center ${riskStyle.cardClass}`}>
          <h3 className="text-sm font-medium text-gray-400 mb-2">ESTIMATED RISK LEVEL</h3>
          <p className={`text-2xl font-bold ${riskStyle.textClass}`}>
            {report.riskLevel.toUpperCase()}
          </p>
        </div>
        
        <div className="md:col-span-2 bg-gray-900 bg-opacity-50 p-4 rounded-xl">
          <h3 className="text-sm font-medium text-gray-400 mb-2">EXECUTIVE SUMMARY</h3>
          <p className="text-gray-300">{report.summary}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Detailed Findings</h3>
        <div className="space-y-4">
          {report.findings && report.findings.length > 0 ? (
            report.findings.map((finding, index) => (
              <div 
                key={index}
                className="bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-700 border-opacity-50"
              >
                <h4 className="font-semibold text-white mb-2">{finding.title}</h4>
                <p className="text-sm text-gray-400">{finding.description}</p>
              </div>
            ))
          ) : (
            <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-700 border-opacity-50 text-center">
              <p className="text-gray-500">
                AI did not find any specific security vulnerabilities or the contract has a simple structure.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Check } from 'lucide-react';

export default function AISummary({ summary, onRegenerate }) {
  const [copied, setCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleCopy = () => {
    if (summary) {
      // Fallback method for clipboard API
      try {
        // Try modern Clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(summary).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }).catch(() => {
            // Fallback to textarea method
            fallbackCopyTextToClipboard(summary);
          });
        } else {
          // Use fallback method
          fallbackCopyTextToClipboard(summary);
        }
      } catch (err) {
        // Use fallback method
        fallbackCopyTextToClipboard(summary);
      }
    }
  };

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  };

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    // Mock regeneration
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRegenerating(false);
    if (onRegenerate) onRegenerate();
  };

  if (!summary) {
    return (
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
        <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          AI summary is not available for this resource
        </p>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 linear from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            AI Summary
          </h3>
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">
            Beta
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-white/50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Copy summary"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          <button
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="p-2 hover:bg-white/50 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50"
            title="Regenerate summary"
          >
            <RefreshCw className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isRegenerating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-800">
        <p className="text-xs text-gray-600 dark:text-gray-400 italic">
          This summary was generated using AI and may not capture all details. Please review the full document for complete information.
        </p>
      </div>
    </div>
  );
}
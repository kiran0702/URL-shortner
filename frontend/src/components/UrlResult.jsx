import React, { useState } from 'react';

export default function UrlResult({ result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-full mb-4 p-3 bg-white rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <label className="block text-xs text-gray-500 mb-1">Your shortened URL</label>
              <a
                href={result.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium text-lg break-all hover:underline"
              >
                {result.shortUrl}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className={`flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-300 ${copied
                  ? 'bg-green-100 text-green-700 border border-green-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              <div className="flex items-center">
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 text-center">
          <p>Share this link via:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(result.shortUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(result.shortUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900"
            >
              Facebook
            </a>
            <a
              href={`mailto:?subject=Check out this link&body=${encodeURIComponent(result.shortUrl)}`}
              className="text-red-500 hover:text-red-700"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

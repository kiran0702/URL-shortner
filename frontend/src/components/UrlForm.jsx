import React, { useState } from 'react';
import api from '../services/api';

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function UrlForm({ setResult, setError, setLoading, loading }) {
  const [url, setUrl] = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setResult(null);
    setError('');
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (e.g. https://example.com)');
      return;
    }
    setLoading(true);
    try {
      const res = await api.post('/shorten', { originalUrl: url });
      setResult(res.data);
      setUrl('');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to shorten URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="relative">
        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${focused ? 'text-blue-500' : 'text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <input
          type="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Paste your long URL here..."
          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all duration-200"
          required
          disabled={loading}
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            <span>Shortening...</span>
          </div>
        ) : 'Shorten URL'}
      </button>
      <p className="text-xs text-center text-gray-500 mt-3">
        By using our service, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  );
}

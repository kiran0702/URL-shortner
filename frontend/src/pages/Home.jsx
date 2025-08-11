import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import UrlResult from '../components/UrlResult';

export default function Home() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <div className="card p-8 shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-3">URL Shortener</h1>
          <p className="text-gray-600">Transform your long URLs into short, shareable links</p>
        </div>
        <UrlForm
          setResult={setResult}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
        />
        {error && <div className="mt-6 p-3 bg-red-50 border border-red-200 text-red-600 text-center rounded-lg">{error}</div>}
        {result && <UrlResult result={result} />}
      </div>
    </div>
  );
}

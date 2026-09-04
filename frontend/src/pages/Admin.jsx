import React, { useEffect, useState } from 'react';
import UrlList from '../components/UrlList';
import api from '../services/api';

export default function Admin() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/admin')
      .then(res => setUrls(res.data))
      .catch(() => setError('Failed to fetch URLs'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <div className="card p-8 shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">Your Dashboard</h1>
            <p className="text-gray-500 mt-1">View your shortened links, visit counts, and referrers in one place.</p>
          </div>
          <div className="text-sm bg-blue-50 text-blue-700 py-1 px-3 rounded-full font-medium">
            {urls.length} links tracked
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-center rounded-lg mb-6">
            {error}
          </div>
        )}

        {!loading && !error && <UrlList urls={urls} />}

        <div className="mt-8 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
          <span className="font-bold">Note:</span> Add authentication if you want each user to see only their own links in production.
        </div>
      </div>
    </div>
  );
}

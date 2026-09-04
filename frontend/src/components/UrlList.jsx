import React, { useState } from 'react';
import { API_URL } from '../services/api';

export default function UrlList({ urls }) {
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedUrls = [...urls].sort((a, b) => {
    if (sortField === 'visitCount') {
      return sortDirection === 'asc' ? a.visitCount - b.visitCount : b.visitCount - a.visitCount;
    } else if (sortField === 'createdAt' || sortField === 'lastVisitedAt') {
      const dateA = new Date(a[sortField] || 0);
      const dateB = new Date(b[sortField] || 0);
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    } else {
      const valA = a[sortField] || '';
      const valB = b[sortField] || '';
      return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
  });

  if (!urls.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-gray-500 text-lg">No URLs found.</p>
        <p className="text-gray-400 text-sm mt-2">Shorten a URL to get started!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('shortCode')}
            >
              <div className="flex items-center">
                Short URL
                {sortField === 'shortCode' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Original URL
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('visitCount')}
            >
              <div className="flex items-center justify-center">
                Visits
                {sortField === 'visitCount' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('createdAt')}
            >
              <div className="flex items-center justify-center">
                Created
                {sortField === 'createdAt' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            <th
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => handleSort('lastVisitedAt')}
            >
              <div className="flex items-center justify-center">
                Last Visited
                {sortField === 'lastVisitedAt' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Referrer
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedUrls.map(url => (
            <tr key={url._id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={`${API_URL}/${url.shortCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  /{url.shortCode}
                </a>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-xs truncate">
                  <a
                    href={url.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 hover:underline"
                    title={url.originalUrl}
                  >
                    {url.originalUrl}
                  </a>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full bg-blue-100 text-blue-800">
                  {url.visitCount}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {new Date(url.createdAt).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {url.lastVisitedAt && url.lastVisitedAt !== null ?
                  new Date(url.lastVisitedAt).toLocaleString() :
                  <span className="text-gray-400">Not visited yet</span>}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                {url.referrer && url.referrer !== "" ?
                  (() => {
                    try {
                      const referrerUrl = new URL(url.referrer);
                      return (
                        <a href={url.referrer} target="_blank" rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                          title={url.referrer}>
                          {referrerUrl.hostname}
                        </a>
                      );
                    } catch (e) {
                      return <span>{url.referrer}</span>;
                    }
                  })() :
                  <span className="text-gray-400">Direct access</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

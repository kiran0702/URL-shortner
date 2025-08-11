import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600 mr-8">URL Shortener</span>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline underline-offset-4">Home</Link>
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline underline-offset-4">Admin</Link>
            </div>
          </div>
          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Share links easily</span>
        </div>
      </nav>
      <main className="min-h-screen bg-gray-50 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}
import React from 'react';

function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-xl mx-auto text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Tell us what you need clarity on
          </h1>
          <p className="mt-4 text-gray-600">
            Answer a few questions and let AI give you personalized insights on key areas of your business.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            Start
          </button>
        </div>
        {/* Steps Indicator */}
        <div className="mt-12 flex justify-center space-x-4 text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">1.</span>
            <span>Choose area</span>
          </div>
          <span>→</span>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">2.</span>
            <span>Answer questions</span>
          </div>
          <span>→</span>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">3.</span>
            <span>Get insights</span>
          </div>
        </div>
      </div>

      {/* AI Insights History Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              AI Insights History
            </h2>
            <p className="mt-1 text-gray-600">
              Review all of your past diagnostic reports in one place
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <input
              type="text"
              placeholder="Search insights..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>All Areas</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
              <option>All Status</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Not Started</option>
            </select>
          </div>
        </div>

        {/* Insight Result Card */}
        <div className="bg-white p-6 rounded-lg shadow mb-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 text-sm font-medium rounded-full">
                Technology
              </span>
              <p className="mt-4 text-gray-700">
                This report provides key insights on your technology stack efficiency and opportunities for improvement.
              </p>
              <div className="mt-4 flex flex-wrap items-center text-sm space-x-2 text-gray-600">
                <span>
                  Area: <span className="font-medium text-gray-800">Technology</span>
                </span>
                <span>
                  Status: <span className="font-medium text-gray-800">Completed</span>
                </span>
                <span>
                  Date: <span className="font-medium text-gray-800">Dec 7, 2025</span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end md:mt-0 mt-4 md:ml-6">
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIInsightsPage;

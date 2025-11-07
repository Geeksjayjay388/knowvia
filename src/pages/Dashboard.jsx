import React from 'react';
import SideBar from '../components/SideBar';

const Dashboard = () => {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white font-sans overflow-hidden">
        
      
      <section className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">👋 Welcome back, Jacob</h1>
          <p className="text-gray-400 mt-1">Here's what's happening today.</p>
        </header>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-2">📦 Total Uploads</h2>
            <p className="text-3xl font-bold">128</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-2">👥 Completed Exercises</h2>
            <p className="text-3xl font-bold">34</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-2">📚 Syllabus Added</h2>
            <p className="text-3xl font-bold">36</p>
          </div>
        </div>

        {/* Upload Shortcut */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8 shadow-lg border border-white/10">
          <h2 className="text-2xl font-bold mb-4">🚀 Quick Upload</h2>
          <input
            type="file"
            accept="application/pdf"
            className="block w-full text-sm font-semibold text-gray-300 bg-gray-800 rounded-lg border border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 file:cursor-pointer file:bg-indigo-600 file:text-white file:rounded-md"
          />
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg transition-all duration-200 shadow-md">
            Upload Syllabus
          </button>
        </div>

        {/* Recent Activity */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📝 Recent Uploads</h2>
          <ul className="space-y-4">
            <li className="bg-gray-800 p-4 rounded-lg shadow border border-white/10 hover:bg-gray-700 transition">
              <p className="font-semibold">Biology Form 2 - Classification of Organisms</p>
              <span className="text-sm text-gray-400">Uploaded 2 days ago</span>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg shadow border border-white/10 hover:bg-gray-700 transition">
              <p className="font-semibold">Math Form 4 - Trigonometry</p>
              <span className="text-sm text-gray-400">Uploaded 4 days ago</span>
            </li>
          </ul>
        </section>

        {/* Chart or Graph Placeholder */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white/10">
          <h2 className="text-2xl font-bold mb-4">📊 Your Progress</h2>
          <div className="h-64 w-full flex items-center justify-center text-gray-400">
            Chart goes here... maybe `recharts`, `chart.js`, or `apexcharts`?
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;

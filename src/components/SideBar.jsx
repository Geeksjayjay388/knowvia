import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white ">
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        Knovia Admin
      </div>

      <nav className="mt-6 space-y-4">
        <Link
          to="/dashboard"
          className="block px-6 py-2 hover:bg-gray-700 rounded transition"
        >
          📊 Dashboard
        </Link>
        <Link
          to="/syllabus"
          className="block px-6 py-2 hover:bg-gray-700 rounded transition"
        >
          📚 Syllabus
        </Link>
        <Link
          to="/students"
          className="block px-6 py-2 hover:bg-gray-700 rounded transition"
        >
          👥 Students
        </Link>
        <Link
          to="/settings"
          className="block px-6 py-2 hover:bg-gray-700 rounded transition"
        >
          ⚙️ Settings
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;

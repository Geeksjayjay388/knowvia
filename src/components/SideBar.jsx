import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: '📊' },
    { label: 'Syllabus', to: '/syllabus', icon: '📚' },
    { label: 'Flashcards & Exercises', to: '/flashcards', icon: '👥' },
    { label: 'Profile & Settings', to: '/settings', icon: '⚙️' },
  ];

  return (
    <div 
      className={`h-screen ${isCollapsed ? 'w-20' : 'w-72'} bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white shadow-2xl flex flex-col transition-all duration-300 relative border-r border-white/5`}
    >
      {/* Animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative flex items-center justify-between h-20 px-6 border-b border-white/10 backdrop-blur-sm">
        {!isCollapsed && (
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            🎓 Knovia AI
          </span>
        )}
        {isCollapsed && <span className="text-2xl mx-auto">🎓</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110"
        >
          <span className="text-xs">{isCollapsed ? '→' : '←'}</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2 relative">
        {navItems.map(({ label, to, icon }, index) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              `group relative flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} px-4 py-3.5 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white shadow-lg shadow-purple-500/30'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-1'
              }`
            }
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {({ isActive }) => (
              <>
                {/* Animated background for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"></div>
                )}
                
                {/* Icon with animation */}
                <span className={`text-2xl relative z-10 transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {icon}
                </span>
                
                {/* Label */}
                {!isCollapsed && (
                  <span className="relative z-10 whitespace-nowrap">{label}</span>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl border border-white/10 z-50">
                    {label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                  </div>
                )}
                
                {/* Active indicator */}
                {isActive && !isCollapsed && (
                  <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className={`relative px-6 pb-6 mt-auto ${isCollapsed ? 'text-center' : ''}`}>
        {!isCollapsed && (
          <>
            <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 backdrop-blur-sm">
              <p className="text-xs font-semibold text-purple-300 mb-1">Need Help?</p>
              <p className="text-xs text-gray-400">Contact support anytime</p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Knovia AI
            </p>
          </>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
            <span className="text-sm">?</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="font-['Metropolis'] text-2xl font-bold text-white tracking-wider">
            linqed.io
          </div>
          <button className="btn-primary text-sm">
            Start Demo
          </button>
        </div>
      </div>
    </nav>
  );
}
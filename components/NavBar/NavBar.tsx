import React from 'react';
import { Search } from 'lucide-react';
import { LogOut } from 'lucide-react';

export default function NavBar() {
  return (
    <div className="w-full flex justify-between items-center">
      {/* search */}
      <div className="w-1/3 border border-gray-300 text-gray-600 rounded-full px-4 flex items-center gap-3">
        <Search size={14} />
        <input
          placeholder="Search for tasks"
          className="placeholder-gray-800 text-sm focus:outline-none py-1.5 flex-1 text-gray-900"
        />
      </div>
      {/* account */}
      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold">Selam Grima</span>
        <LogOut size={20} className="text-gray-800" />
      </div>
    </div>
  );
}

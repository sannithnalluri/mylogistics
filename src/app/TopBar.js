import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img 
          className="w-12 h-12 rounded-full object-cover"
          src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1745563469~exp=1745567069~hmac=80b8311b1ba378d7085b638f49c16ae8f5d5d7cfcba80d8d125e272cd9016d6c&w=1060" 
          alt="Profile"
        />
        <div>
          <h1 className="text-lg font-medium text-gray-800">Pavan Kumar</h1>
          <p className="text-sm text-gray-500">ID: <span className="text-gray-700">1325131</span></p>
        </div>
      </div>

      {/* Branch Info */}
      <div className="text-sm text-gray-600 text-center md:text-right">
        <p><span className="font-medium text-blue-600">Branch:</span> BranchName</p>
        <p>📍 LocationName</p>
        <p>📞 1234567890</p>
        <p>🏢 Address</p>
      </div>
      
    </div>
  );
}

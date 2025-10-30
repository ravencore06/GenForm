"use client";

import Image from 'next/image';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-green-950/30'>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-300/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-xl px-4 py-8">
        {/* Logo/Branding - Moved outside card */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl blur-md opacity-50"></div>
            <div className="relative w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-3xl">
                <Image src="/genform.png" alt="GenForm Logo" width={48} height={48} priority />
              </span>
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            GenForm
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
            AI-Powered Form Builder
          </p>
        </div>

        {/* Clerk Component Container */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
          <div className="relative">
            {children}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Trusted by <span className="font-semibold text-green-600 dark:text-green-400">500+</span> users worldwide
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default Layout; 
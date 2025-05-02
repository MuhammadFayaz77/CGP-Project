import { HomeIcon, Link } from 'lucide-react';
import React, { useRef } from 'react'

export default function boot() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[rgb(38,39,53)] text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700 shadow-md">
        <h1 className="text-[rgb(240,150,91)] font-bold text-2xl">APARAVI</h1>
        <Link href="#">
          <div className="flex items-center gap-2 px-4 py-2 border border-orange-500 bg-orange-500 rounded-full cursor-pointer shadow-sm">
            <HomeIcon size={18} color="white" />
            <span className="text-white font-medium text-sm">Home</span>
          </div>
        </Link>
      </div>

      {/* Title */}
      <div className="text-center py-6">
        <h2 className="text-orange-400 text-2xl font-bold">
          Academy Expert Chat
        </h2>
        <p className="text-gray-400 text-sm mt-2 leading-5">
          Simplify Your Learning With Smart Guidance. <br />
          Ask, Learn, And Grow — Anytime, Anywhere.
        </p>
      </div>

      {/* Date Divider */}
      <div className="flex items-center justify-center py-2">
        <div className="w-1/3 border-t border-gray-600" />
        <span className="mx-2 text-sm text-gray-400">Today</span>
        <div className="w-1/3 border-t border-gray-600" />
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto scroll-m-hide px-4 flex justify-center">
        <div ref={chatContainerRef} className="w-full max-w-2xl">
          {Response.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start mb-4 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg shadow-md ${
                  msg.type === "user"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
                
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

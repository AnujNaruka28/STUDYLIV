"use client"
import React, { useState } from 'react'
import { IoSend, IoSparkles } from "react-icons/io5";

const AIChat = () => {
    const [message, setMessage] = useState("");

    return (
        <div className="w-full h-full flex flex-col bg-[var(--richblack-900)]">
            {/* Header */}
            <div className="p-4 border-b border-[var(--richblack-800)] flex items-center gap-2">
                <IoSparkles className="text-[#47A5C5] w-5 h-5" />
                <h2 className="text-[var(--richblack-5)] font-medium">AI Chat</h2>
            </div>

            {/* Chat Messages Placeholder */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar">
                <div className="bg-[var(--richblack-800)] p-4 rounded-2xl rounded-tl-none max-w-[80%] self-start text-[var(--richblack-25)] text-sm leading-relaxed border border-[var(--richblack-700)]">
                    Hello! I'm your AI learning assistant. How can I help you with today's lecture?
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[var(--richblack-900)] border-t border-[var(--richblack-800)]">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask anything about the lecture..."
                        className="w-full bg-[var(--richblack-800)] text-[var(--richblack-25)] text-sm rounded-2xl py-3 pl-4 pr-12 border border-[var(--richblack-700)] focus:outline-none focus:border-[#47A5C5] transition-all duration-300"
                    />
                    <button className="absolute right-2 p-2 rounded-xl bg-[#47A5C5] text-white hover:bg-[#3d8fb0] transition-all duration-300 shadow-md">
                        <IoSend className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    )
}

export default AIChat;

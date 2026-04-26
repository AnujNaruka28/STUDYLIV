"use client"
import React, { useState, useRef, useEffect } from 'react'
import { IoSend, IoSparkles } from "react-icons/io5";
import { featureApi } from "@/lib/AIFeaturesAPI";
import { useLecture } from "@/lib/context/LectureContext";
import { Loader2 } from "lucide-react";

interface Message {
    role: 'user' | 'assistant';
    text: string;
}

import { useLanguage } from "@/lib/context/LanguageContext";

interface AIChatProps {
}

const AIChat: React.FC<AIChatProps> = () => {
    const { locale } = useLanguage();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const [isGreetingLoading, setIsGreetingLoading] = useState(false);
    const { transcript } = useLecture();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchGreeting = async () => {
            setIsGreetingLoading(true);
            try {
                const response = await featureApi.getGreeting(locale);
                if (response.data) {
                    setMessages([{ role: 'assistant', text: response.data }]);
                } else {
                    setMessages([{ role: 'assistant', text: locale === 'English' ? "Hello! How can I help you today?" : "Hello!" }]);
                }
            } catch (error) {
                console.error("Failed to fetch greeting:", error);
                setMessages([{ role: 'assistant', text: "Hello! How can I help you today?" }]);
            } finally {
                setIsGreetingLoading(false);
            }
        };

        if (messages.length === 0 || messages[0].role === 'assistant') {
            fetchGreeting();
        }
    }, [locale]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = message.trim();
        setMessage("");
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setLoading(true);

        try {
            // Get transcript text if available
            const transcriptText = transcript?.text || "";
            
            const response = await featureApi.getAIChat(userMessage, transcriptText, locale);
            
            if (response.error) {
                setMessages(prev => [...prev, { role: 'assistant', text: "Error: " + response.error }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', text: response.data }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', text: "Failed to get response. Please try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full flex flex-col bg-[var(--richblack-900)]">
            {/* Header */}
            <div className="p-4 border-b border-[var(--richblack-800)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <IoSparkles className="text-[#47A5C5] w-5 h-5 animate-pulse" />
                    <h2 className="text-[var(--richblack-5)] font-medium">AI Chat</h2>
                </div>
                <span className="text-[10px] text-[var(--richblack-400)] font-medium uppercase tracking-widest bg-[var(--richblack-800)] px-2 py-0.5 rounded-full border border-[var(--richblack-700)]">
                    Local: {locale}
                </span>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 custom-scrollbar bg-gradient-to-b from-[var(--richblack-900)] to-[var(--richblack-800)]/30">
                {isGreetingLoading && messages.length === 0 && (
                    <div className="bg-[var(--richblack-800)] p-4 rounded-2xl rounded-tl-none self-start flex items-center gap-2 border border-[var(--richblack-700)]">
                        <Loader2 className="w-4 h-4 animate-spin text-[#47A5C5]" />
                        <span className="text-xs text-[var(--richblack-300)]">AI is waking up...</span>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`
                            p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed border transition-all duration-300
                            ${msg.role === 'user' 
                                ? 'bg-[var(--richblack-700)] self-end text-[var(--richblack-5)] rounded-br-none border-[var(--richblack-600)]' 
                                : 'bg-[var(--richblack-800)] self-start text-[var(--richblack-25)] rounded-tl-none border-[var(--richblack-700)] shadow-lg'
                            }
                        `}
                    >
                        {msg.text}
                    </div>
                ))}
                {loading && (
                    <div className="bg-[var(--richblack-800)] p-4 rounded-2xl rounded-tl-none self-start flex items-center gap-2 border border-[var(--richblack-700)]">
                        <Loader2 className="w-4 h-4 animate-spin text-[#47A5C5]" />
                        <span className="text-xs text-[var(--richblack-300)]">Thinking...</span>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[var(--richblack-900)] border-t border-[var(--richblack-800)]">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask anything about the lecture..."
                        className="w-full bg-[var(--richblack-800)] text-[var(--richblack-25)] text-sm rounded-2xl py-3 pl-4 pr-12 border border-[var(--richblack-700)] focus:outline-none focus:border-[#47A5C5] transition-all duration-300 placeholder:text-[var(--richblack-500)]"
                    />
                    <button 
                        onClick={handleSendMessage}
                        disabled={loading || !message.trim()}
                        className={`
                            absolute right-2 p-2 rounded-xl transition-all duration-300 shadow-md
                            ${loading || !message.trim() ? 'bg-[var(--richblack-700)] text-[var(--richblack-400)] grayscale' : 'bg-[#47A5C5] text-white hover:bg-[#3d8fb0]'}
                        `}
                    >
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
                  background: rgba(255, 255, 255, 0.05);
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    )
}

export default AIChat;

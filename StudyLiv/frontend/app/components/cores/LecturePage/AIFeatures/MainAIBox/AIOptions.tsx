"use client"
import React from 'react'
import { IoChatbubbleEllipsesOutline, IoDocumentTextOutline, IoAnalyticsOutline, IoCreateOutline, IoLayersOutline } from "react-icons/io5";

interface AIOptionsProps {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const AIOptions: React.FC<AIOptionsProps> = ({ selectedOption, setSelectedOption }) => {
    const options = [
        { id: 'chat', label: 'AI Chat', icon: <IoChatbubbleEllipsesOutline className="w-5 h-5" /> },
        { id: 'transcript', label: 'Transcript', icon: <IoDocumentTextOutline className="w-5 h-5" /> },
        { id: 'summarize', label: 'Summarize', icon: <IoAnalyticsOutline className="w-5 h-5" /> },
        { id: 'notes', label: 'Notes', icon: <IoCreateOutline className="w-5 h-5" /> },
        { id: 'flashcards', label: 'Flashcards', icon: <IoLayersOutline className="w-5 h-5" /> },
    ];

    return (
        <div className="w-full h-full bg-[var(--richblack-900)] border-r border-[var(--richblack-800)] flex flex-col p-4 gap-2">
            <h3 className="text-[var(--richblack-5)] font-semibold text-lg mb-4 px-2 tracking-tight">AI Assistant</h3>
            <div className="flex flex-col gap-1.5">
                {options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        className={`
                            flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                            ${selectedOption === option.id
                                ? 'bg-[var(--yellow-50)] text-[var(--richblack-900)] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset]'
                                : 'text-[var(--richblack-300)] hover:bg-[var(--richblack-800)] hover:text-[var(--richblack-50)]'
                            }
                        `}
                    >
                        <span className={`transition-transform duration-300 group-hover:scale-110 ${selectedOption === option.id ? 'text-[var(--richblack-900)]' : 'text-[var(--richblack-400)] group-hover:text-[var(--richblack-100)]'}`}>
                            {option.icon}
                        </span>
                        <span className="font-medium text-sm tracking-wide">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AIOptions;

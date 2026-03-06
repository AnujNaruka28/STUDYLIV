"use client"
import React, { useState } from 'react'
import AIOptions from './AIOptions'
import AIChat from './AIChat'
import TimeStamps from '../Features/TimeStamps'
import Summarize from '../Features/Summarize'
import Notes from '../Features/Notes'
import FlashCards from '../Features/FlashCards'

const AIBox = () => {
    const [selectedOption, setSelectedOption] = useState("chat");

    const renderFeature = () => {
        switch (selectedOption) {
            case "chat":
                return <AIChat />;
            case "transcript":
                return <TimeStamps />;
            case "summarize":
                return <Summarize />;
            case "notes":
                return <Notes />;
            case "flashcards":
                return <FlashCards />;
            default:
                return <AIChat />;
        }
    }

    return (
        <div className="w-full h-full flex bg-[var(--richblack-900)] overflow-hidden rounded-xl border border-[var(--richblack-800)] shadow-2xl">
            {/* Left Sidebar - 25% */}
            <div className="w-1/4 min-w-[200px] h-full">
                <AIOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>

            {/* Right Content - 75% */}
            <div className="flex-1 h-full overflow-hidden">
                {renderFeature()}
            </div>
        </div>
    )
}

export default AIBox;

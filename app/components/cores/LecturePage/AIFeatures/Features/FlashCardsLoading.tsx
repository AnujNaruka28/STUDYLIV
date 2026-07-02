"use client"
import React, { useEffect, useState } from 'react'
import CTAButton from '@/app/components/common/CTAButton';

interface FlashCardsLoadingProps {
    count: number;
    dataReady: boolean;
    onShowFlashcards: () => void;
}

const FlashCardsLoading: React.FC<FlashCardsLoadingProps> = ({ count, dataReady, onShowFlashcards }) => {
    const [revealedCount, setRevealedCount] = useState(0);

    const isComplete = revealedCount === count && dataReady;

    useEffect(() => {
        if (revealedCount < count) {
            const timer = setTimeout(() => {
                setRevealedCount(prev => prev + 1);
            }, Math.max(50, 500 / (count / 10)));
            return () => clearTimeout(timer);
        }
    }, [revealedCount, count]);

    const colors = [
        'bg-blue-500/20 border-blue-500/40 text-blue-400',
        'bg-purple-500/20 border-purple-500/40 text-purple-400',
        'bg-pink-500/20 border-pink-500/40 text-pink-400',
        'bg-yellow-500/20 border-yellow-500/40 text-yellow-400',
        'bg-green-500/20 border-green-500/40 text-green-400',
    ];

    return (
        <div className="w-full h-full flex flex-col gap-6 p-6 overflow-hidden">
            <div className="flex flex-col gap-2">
                <h3 className="text-[var(--richblack-5)] font-semibold text-lg flex items-center gap-2">
                    Generating {count} Flashcards
                    {isComplete && <span className="text-green-500 text-xs font-normal bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 animate-pulse">Ready!</span>}
                </h3>
                <div className="w-full bg-[var(--richblack-800)] h-1.5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[var(--yellow-50)] transition-all duration-300 ease-out"
                        style={{ width: `${(revealedCount / count) * 100}%` }}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div className="flex flex-wrap gap-3 justify-center">
                    {Array.from({ length: count }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-14 h-14 rounded-xl border flex items-center justify-center font-bold transition-all duration-500 transform
                                ${i < revealedCount
                                    ? `${colors[i % colors.length]} scale-100 opacity-100 shadow-lg`
                                    : 'bg-[var(--richblack-800)] border-[var(--richblack-700)] text-[var(--richblack-600)] scale-90 opacity-40'
                                }
                            `}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>

            {isComplete && (
                <div className="pt-4 border-t border-[var(--richblack-800)] flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <CTAButton
                        active={true}
                        text="Show Flashcards"
                        onClick={onShowFlashcards}
                        className="w-full max-w-sm"
                    />
                </div>
            )}
        </div>
    )
}

export default FlashCardsLoading;

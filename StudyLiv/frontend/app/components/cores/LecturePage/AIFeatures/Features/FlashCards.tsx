"use client"
import React, { useState } from 'react'
import { IoLayersOutline, IoArrowBackOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Counter from '@/app/components/common/Counter';
import CTAButton from '@/app/components/common/CTAButton';
import FlashCardsLoading from './FlashCardsLoading';
import { useLecture } from '@/lib/context/LectureContext';
import { featureApi } from '@/lib/AIFeaturesAPI';

interface FlashCard {
    question: string;
    answer: string;
    color: string;
}

type ViewState = 'input' | 'generating' | 'showing';

const FlashCardItem = ({ card }: { card: FlashCard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="w-full h-[300px] perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front - Question */}
                <div className={`absolute w-full h-full backface-hidden rounded-2xl ${card.color} border border-white/10 p-8 flex flex-col items-center justify-center text-center gap-4 shadow-2xl`}>
                    <span className="text-[var(--yellow-50)] text-xs font-bold uppercase tracking-widest">Question</span>
                    <h4 className="text-xl font-bold text-white leading-tight">{card.question}</h4>
                    <p className="text-[var(--richblack-400)] text-[10px] mt-4 uppercase tracking-tighter">Click to reveal answer</p>
                </div>

                {/* Back - Answer */}
                <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[var(--richblack-800)] border border-[var(--yellow-50)]/20 p-8 flex flex-col items-center justify-center text-center gap-4 shadow-2xl`}>
                    <span className="text-[var(--yellow-50)] text-xs font-bold uppercase tracking-widest">Answer</span>
                    <p className="text-[var(--richblack-50)] text-sm leading-relaxed">{card.answer}</p>
                    <p className="text-[var(--richblack-400)] text-[10px] mt-4 uppercase tracking-tighter">Click to see question</p>
                </div>
            </div>
        </div>
    );
};

import { useLanguage } from '@/lib/context/LanguageContext';

interface FlashCardsProps {
}

const FlashCards: React.FC<FlashCardsProps> = () => {
    const { locale } = useLanguage();
    const { transcript } = useLecture();
    const [numCards, setNumCards] = useState(10);
    const [view, setView] = useState<ViewState>('input');
    const [flashcards, setFlashcards] = useState<FlashCard[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const cardColors = [
        'bg-[#1a2e3a]', // Deep blue
        'bg-[#2d1b33]', // Deep purple
        'bg-[#1b2d24]', // Deep green
        'bg-[#33221b]', // Deep brown/orange
        'bg-[#1b1b33]', // Royal blue/purple
    ];

    const handleGenerate = async () => {
        if (!transcript) {
            setError("No transcript available.");
            return;
        }
        setError(null);
        setView('generating');

        try {
            const result = await featureApi.getFlashCards(transcript.text || JSON.stringify(transcript), numCards, locale);

            if (result.error) throw new Error(result.error);

            // result.data should now be the array from the API
            const aiCards = Array.isArray(result.data) ? result.data : [];

            if (aiCards.length === 0) {
                throw new Error("No flashcards were generated. Please try again.");
            }

            const processedCards: FlashCard[] = aiCards.map((card: any, i: number) => ({
                question: card.question || "No Question Provided",
                answer: card.answer || "No Answer Provided",
                color: cardColors[i % cardColors.length]
            }));

            setFlashcards(processedCards);
        } catch (err: any) {
            console.error("Flashcard generation error:", err);
            setError(err.message || "Failed to generate flashcards");
        }
    };

    const handleShowFlashcards = () => {
        setView('showing');
    };

    const handleBack = () => {
        setView('input');
        setFlashcards(null);
    };

    if (view === 'generating') {
        return <FlashCardsLoading
            count={numCards}
            dataReady={flashcards !== null}
            onShowFlashcards={handleShowFlashcards}
        />;
    }

    if (view === 'showing' && flashcards) {
        return (
            <div className="w-full h-full p-6 bg-[var(--richblack-900)] flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-[var(--richblack-800)] pb-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleBack}
                            className="p-2 hover:bg-[var(--richblack-800)] rounded-full transition-colors text-[var(--richblack-400)] hover:text-[var(--richblack-5)]"
                        >
                            <IoArrowBackOutline className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            <IoLayersOutline className="w-5 h-5 text-[var(--yellow-50)]" />
                            <h3 className="font-semibold text-[var(--richblack-5)]">Flashcards ({flashcards.length})</h3>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-xl mx-auto flex items-center justify-center">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        className="w-full h-[350px] flashcards-swiper"
                    >
                        {flashcards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <FlashCardItem card={card} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style jsx global>{`
                    .flashcards-swiper .swiper-button-next,
                    .flashcards-swiper .swiper-button-prev {
                        color: var(--yellow-50);
                        background: var(--richblack-800);
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        transform: scale(0.6);
                    }
                    .flashcards-swiper .swiper-button-next:after,
                    .flashcards-swiper .swiper-button-prev:after {
                        font-size: 20px;
                    }
                    .flashcards-swiper .swiper-pagination-bullet {
                        background: var(--richblack-600);
                        opacity: 1;
                    }
                    .flashcards-swiper .swiper-pagination-bullet-active {
                        background: var(--yellow-50);
                    }
                    .perspective-1000 {
                        perspective: 1000px;
                    }
                    .preserve-3d {
                        transform-style: preserve-3d;
                    }
                    .backface-hidden {
                        backface-visibility: hidden;
                    }
                    .rotate-y-180 {
                        transform: rotateY(180deg);
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="w-full h-full p-8 bg-[var(--richblack-900)] flex flex-col items-center justify-center text-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-[var(--richblack-800)] flex items-center justify-center border border-[var(--richblack-700)] shadow-inner">
                <IoLayersOutline className="w-10 h-10 text-[var(--yellow-50)]" />
            </div>

            <div className="flex flex-col gap-3 max-w-md">
                <h2 className="text-2xl font-bold text-[var(--richblack-5)] tracking-tight">Generate Flashcards</h2>
                <p className="text-[var(--richblack-400)] text-sm leading-relaxed">
                    Convert this lecture into interactive flashcards. Perfect for active recall and quick revision before exams.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 bg-[var(--richblack-800)]/50 p-6 rounded-2xl border border-[var(--richblack-800)] w-full max-w-sm">
                <div className="flex items-center justify-between w-full">
                    <span className="text-[var(--richblack-200)] font-medium text-sm">Number of Cards</span>
                    <Counter
                        value={numCards}
                        onChange={setNumCards}
                        min={1}
                        max={160}
                    />
                </div>

                {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

                <CTAButton
                    active={true}
                    text="Generate Flashcards"
                    onClick={handleGenerate}
                    className="w-full mt-2"
                    disable={!transcript}
                />
            </div>

            {!transcript && (
                <div className="flex items-center gap-2 text-[var(--richblack-500)] text-xs">
                    <div className="w-2 h-2 rounded-full bg-red-500/50 animate-pulse" />
                    Waiting for lecture transcript...
                </div>
            )}
        </div>
    )
}

export default FlashCards;

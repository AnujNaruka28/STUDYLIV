import React from "react";
import { Loader2, Clock, Globe } from "lucide-react";
import { useTranscript } from "@/lib/hooks/useTranscript";
import { useLanguage } from "@/lib/context/LanguageContext";

const TimeStamps = () => {
    const { locale } = useLanguage();
    const { segments, loading, error, retry } = useTranscript();

    const formatTime = (ms: number) => {
        const seconds = Math.floor(ms / 1000);
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        if (h > 0) {
            return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        }
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4 bg-[var(--richblack-900)]">
                <Loader2 className="w-8 h-8 animate-spin text-[#47A5C5]" />
                <div className="text-center">
                    <p className="text-sm font-medium text-[var(--richblack-5)]">Transcribing audio...</p>
                    <p className="text-xs text-[var(--richblack-400)] mt-1">This might take a few moments</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4 bg-[var(--richblack-900)]">
                <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20 text-center">
                    <p className="text-red-500 font-medium">Something went wrong</p>
                    <p className="text-xs text-red-400/80 mt-1">{error}</p>
                </div>
                <button
                    onClick={retry}
                    className="px-6 py-2 bg-[#47A5C5] text-white rounded-xl hover:bg-[#3d8fb0] transition-colors shadow-lg active:scale-95 transition-transform"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-[var(--richblack-900)] overflow-hidden">
            <div className="p-4 border-b border-[var(--richblack-800)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--richblack-400)]">
                    <Clock className="w-4 h-4" />
                    <h3 className="font-medium">Lecture Transcript</h3>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-[var(--richblack-800)] text-[var(--richblack-300)] rounded-full border border-[var(--richblack-700)] uppercase tracking-widest">
                        AI Powered
                    </span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1 bg-gradient-to-b from-[var(--richblack-900)] to-[var(--richblack-800)]/20">
                {segments.length > 0 ? (
                    segments.map((segment, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-3 rounded-2xl group border border-transparent hover:bg-[var(--richblack-800)]/40 hover:border-[var(--richblack-700)] transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-20 text-[var(--richblack-400)] font-mono text-xs pt-1 flex items-start gap-1">
                                <span className="bg-[var(--richblack-800)] px-2 py-1 rounded-lg border border-[var(--richblack-700)] group-hover:border-[#47A5C5]/50 group-hover:text-[#47A5C5] transition-all flex items-center shadow-sm">
                                    {formatTime(segment.start)}
                                </span>
                            </div>
                            <div className="flex-1 text-sm text-[var(--richblack-100)] leading-relaxed pt-1 transition-colors duration-300 group-hover:text-[var(--richblack-5)]">
                                {segment.text}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center p-20 text-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-[var(--richblack-800)] flex items-center justify-center border border-[var(--richblack-700)]">
                            <Clock className="w-8 h-8 text-[var(--richblack-500)]" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[var(--richblack-5)] font-medium">No transcript available</p>
                            <p className="text-[var(--richblack-400)] text-sm italic">Audio processing might be required.</p>
                        </div>
                    </div>
                )}
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
    );
};

export default TimeStamps;

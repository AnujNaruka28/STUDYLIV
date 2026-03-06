import React, { useState, useEffect, useCallback } from "react";
import { Loader2, Play, Clock } from "lucide-react";
import { featureApi } from "@/lib/AIFeaturesAPI";
import { useLecture } from "@/lib/context/LectureContext";

interface TranscriptUtterance {
    start: number;
    end: number;
    text: string;
}

interface TranscriptResponse {
    text: string;
    words?: {
        start: number;
        end: number;
        text: string;
        confidence: number;
    }[];
    utterances?: TranscriptUtterance[];
}

const TimeStamps = () => {
    const { lectureUrl, setTranscript: setGlobalTranscript } = useLecture();
    const [transcript, setTranscript] = useState<TranscriptResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTranscript = useCallback(async () => {
        const audioUrl = (lectureUrl && lectureUrl.includes('/video/upload/')) ? lectureUrl : "https://res.cloudinary.com/dl3kraaox/video/upload/v1772377213/videoplayback_xzoho7.mp4";
        setLoading(true);
        setError(null);
        try {
            const result = await featureApi.getTranscript(audioUrl);
            if (result.error) throw new Error(result.error);
            setTranscript(result);
            setGlobalTranscript(result);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }, [lectureUrl, setGlobalTranscript]);

    useEffect(() => {
        fetchTranscript();
    }, [fetchTranscript]);

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
                <p className="text-sm font-medium text-[var(--richblack-400)]">Transcribing audio...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4 bg-[var(--richblack-900)]">
                <p className="text-red-500 font-medium">Error: {error}</p>
                <button
                    onClick={fetchTranscript}
                    className="px-6 py-2 bg-[#47A5C5] text-white rounded-xl hover:bg-[#3d8fb0] transition-colors shadow-lg"
                >
                    Retry
                </button>
            </div>
        );
    }

    const segments = transcript?.words ?
        transcript.words.reduce((acc: any[], word, i) => {
            const segmentSize = 10;
            const segmentIndex = Math.floor(i / segmentSize);
            if (!acc[segmentIndex]) {
                acc[segmentIndex] = { start: word.start, text: word.text };
            } else {
                acc[segmentIndex].text += " " + word.text;
            }
            return acc;
        }, []) : [];

    return (
        <div className="flex flex-col h-full bg-[var(--richblack-900)] overflow-hidden">
            <div className="p-4 border-b border-[var(--richblack-800)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--richblack-400)]">
                    <Clock className="w-4 h-4" />
                    <h3 className="font-medium">Lecture Transcript</h3>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 bg-[var(--richblack-800)] text-[var(--richblack-300)] rounded-full border border-[var(--richblack-700)] uppercase tracking-wider">
                    AI Powered
                </span>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
                {segments.length > 0 ? (
                    segments.map((segment, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-3 rounded-xl group border border-transparent"
                        >
                            <div className="flex-shrink-0 w-20 text-[var(--richblack-400)] font-mono text-xs pt-1 flex items-start gap-1">
                                <span className="bg-[var(--richblack-800)] px-2 py-1 rounded-lg border border-[var(--richblack-700)] group-hover:border-[var(--richblack-500)] transition-all flex items-center gap-1">
                                    {/* <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--richblack-100)]" /> */}
                                    <span className="group-hover:text-[var(--richblack-100)]">{formatTime(segment.start)}</span>
                                </span>
                            </div>
                            <div className="flex-1 text-sm text-[var(--richblack-100)] leading-relaxed pt-1">
                                {segment.text}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-10 text-center text-[var(--richblack-400)] italic text-sm">
                        No transcript available.
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

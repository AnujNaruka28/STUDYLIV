"use client"
import { useState, useEffect, useCallback, useMemo } from "react";
import { featureApi } from "@/lib/AIFeaturesAPI";
import { useLecture } from "@/lib/context/LectureContext";
import { useLanguage } from "@/lib/context/LanguageContext";

interface TranscriptUtterance {
    start: number;
    end: number;
    text: string;
}

interface TranscriptWord {
    start: number;
    end: number;
    text: string;
    confidence: number;
}

interface TranscriptResponse {
    text: string;
    words?: TranscriptWord[];
    utterances?: TranscriptUtterance[];
}

interface Segment {
    start: number;
    originalText: string;
    text: string;
}

export const useTranscript = () => {
    const { lectureUrl, setTranscript: setGlobalTranscript } = useLecture();
    const { locale } = useLanguage();
    const [transcript, setTranscript] = useState<TranscriptResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [segments, setSegments] = useState<Segment[]>([]);

    const fetchTranscript = useCallback(async () => {
        const audioUrl = (lectureUrl && lectureUrl.includes('/video/upload/')) 
            ? lectureUrl 
            : "https://res.cloudinary.com/dl3kraaox/video/upload/v1772377213/videoplayback_xzoho7.mp4";
        
        setLoading(true);
        setError(null);
        try {
            const result = await featureApi.getTranscript(audioUrl, locale);
            if (result.error) throw new Error(result.error);
            
            setTranscript(result);
            setGlobalTranscript(result);

            // Generate segments from words
            if (result.words) {
                const initialSegments = result.words.reduce((acc: Segment[], word: TranscriptWord, i: number) => {
                    const segmentSize = 15;
                    const segmentIndex = Math.floor(i / segmentSize);
                    if (!acc[segmentIndex]) {
                        acc[segmentIndex] = { start: word.start, originalText: word.text, text: word.text };
                    } else {
                        acc[segmentIndex].originalText += " " + word.text;
                        acc[segmentIndex].text += " " + word.text;
                    }
                    return acc;
                }, []);
                setSegments(initialSegments);
            }
        } catch (err: any) {
            setError(err.message || "An error occurred during transcription");
        } finally {
            setLoading(false);
        }
    }, [lectureUrl, setGlobalTranscript, locale]);

    useEffect(() => {
        fetchTranscript();
    }, [fetchTranscript]);

    return {
        transcript,
        segments,
        loading,
        error,
        retry: fetchTranscript
    };
};

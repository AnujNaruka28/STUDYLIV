"use client"
import React, { useState } from 'react'
import { IoCreateOutline } from "react-icons/io5";
import { Loader2, FileText } from "lucide-react";
import CTAButton from '@/app/components/common/CTAButton';
import { useLecture } from '@/lib/context/LectureContext';
import { featureApi } from '@/lib/AIFeaturesAPI';
import MarkdownRenderer from '@/app/components/common/MarkdownRenderer';

import { useLanguage } from '@/lib/context/LanguageContext';

interface NotesProps {
}

const Notes: React.FC<NotesProps> = () => {
    const { locale } = useLanguage();
    const { transcript } = useLecture();
    const [notes, setNotes] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateNotes = async () => {
        if (!transcript) {
            setError("No transcript available to generate notes.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const result = await featureApi.getNotes(transcript.text || JSON.stringify(transcript), locale);
            if (result.error) throw new Error(result.error);
            setNotes(result.data ?? "");
        } catch (err: any) {
            setError(err.message || "Failed to generate notes");
        } finally {
            setLoading(false);
        }
    };

    if (notes) {
        return (
            <div className="w-full h-full p-6 bg-[var(--richblack-900)] flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-2 text-[var(--richblack-400)] border-b border-[var(--richblack-800)] pb-4 mb-2">
                    <FileText className="w-5 h-5" />
                    <h3 className="font-semibold text-[var(--richblack-5)]">AI Generated Notes</h3>
                </div>
                <div className="text-[var(--richblack-100)] text-sm leading-relaxed">
                    <MarkdownRenderer content={notes} />
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--richblack-800)]">
                    <CTAButton active={false} text="Regenerate Notes" onClick={handleGenerateNotes} className="w-full" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full p-6 bg-[var(--richblack-900)] flex flex-col gap-6 items-center justify-center text-center">
            <div className={`w-16 h-16 rounded-3xl bg-[var(--richblack-800)] flex items-center justify-center border border-[var(--richblack-700)] ${loading ? 'animate-pulse' : ''}`}>
                {loading ? <Loader2 className="w-8 h-8 animate-spin text-[var(--richblack-400)]" /> : <IoCreateOutline className="w-8 h-8 text-[var(--richblack-400)]" />}
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[var(--richblack-5)]">AI Study Notes</h2>
                <p className="text-[var(--richblack-400)] text-sm max-w-sm tracking-tight text-center">
                    {loading ? "Our AI is structuring the lecture into comprehensive study notes..." : "Transform this lecture into organized study notes with a single click."}
                </p>
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
            <CTAButton active={false} text={loading ? "Generating..." : "Generate Notes"} onClick={handleGenerateNotes} className="w-[200px]" disable={loading || !transcript} />
            {!transcript && !loading && (
                <p className="text-[10px] text-[var(--richblack-500)] max-w-[180px]">
                    Waiting for transcript to be loaded...
                </p>
            )}
        </div>
    )
}

export default Notes;

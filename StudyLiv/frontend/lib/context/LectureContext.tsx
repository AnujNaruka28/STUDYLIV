"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LectureContextType {
    lectureUrl: string;
    setLectureUrl: (url: string) => void;
    transcript: any | null;
    setTranscript: (transcript: any | null) => void;
}

const LectureContext = createContext<LectureContextType | undefined>(undefined);

export const LectureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lectureUrl, setLectureUrl] = useState<string>("https://res.cloudinary.com/dl3kraaox/video/upload/v1772377213/videoplayback_xzoho7.mp4");
    const [transcript, setTranscript] = useState<any | null>(null);

    return (
        <LectureContext.Provider value={{ lectureUrl, setLectureUrl, transcript, setTranscript }}>
            {children}
        </LectureContext.Provider>
    );
};

export const useLecture = () => {
    const context = useContext(LectureContext);
    if (!context) {
        throw new Error('useLecture must be used within a LectureProvider');
    }
    return context;
};

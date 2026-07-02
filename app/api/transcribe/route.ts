import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";
import { withBackoff } from "@/lib/utils/backoff";

import { LANGUAGE_MAP } from "@/lib/constants/languages";

const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_AI_API_KEY || "",
});

export async function POST(req: Request) {
    try {
        const { audioUrl, locale = "English" } = await req.json();

        if (!audioUrl) {
            return NextResponse.json(
                { error: "Audio URL is required" },
                { status: 400 }
            );
        }

        const languageCode = LANGUAGE_MAP[locale] || "en_us";

        const params = {
            audio: audioUrl,
            language_code: languageCode,
            speech_models: ["universal-2"],
        } as any;

        const transcript = await withBackoff(() => client.transcripts.transcribe(params));

        return NextResponse.json(transcript);
    } catch (error: any) {
        console.error("Transcription error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to transcribe audio" },
            { status: 500 }
        );
    }
}

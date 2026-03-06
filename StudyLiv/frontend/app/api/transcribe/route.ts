import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";
import { withBackoff } from "@/lib/utils/backoff";

const client = new AssemblyAI({
    apiKey: process.env.ASSEMBLY_AI_API_KEY || "",
});

export async function POST(req: Request) {
    try {
        const { audioUrl } = await req.json();

        if (!audioUrl) {
            return NextResponse.json(
                { error: "Audio URL is required" },
                { status: 400 }
            );
        }

        const params = {
            audio: audioUrl,
            language_detection: true,
            speech_models: ["universal-3-pro", "universal-2"],
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

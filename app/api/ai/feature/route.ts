import { NextRequest, NextResponse } from "next/server";
import { PROMPTS } from "@/lib/Prompt";
import { GoogleGenAI } from "@google/genai";
import { withBackoff } from "@/lib/utils/backoff";

const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
});

export async function POST(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const feature = searchParams.get("feature");

    if (!feature || !PROMPTS[feature as keyof typeof PROMPTS]) {
        return NextResponse.json({ error: "Invalid feature requested" }, { status: 400 });
    }

    try {
        const { transcript, count, message, locale = "English" } = await req.json();

        if (!transcript && feature !== "chat" && feature !== "greeting") {
            return NextResponse.json({ error: "Transcript is required" }, { status: 400 });
        }

        let promptText = "";
        if (feature === "chat") {
            promptText = PROMPTS.chat(message || "", transcript || "");
        } else if (feature === "greeting") {
            promptText = PROMPTS.greeting();
        } else if (feature === "translate") {
            promptText = PROMPTS.translate(transcript || "", locale);
        } else if (feature === "flashcards") {
            promptText = PROMPTS.flashcards(transcript, count);
        } else if (feature === "summarize") {
            promptText = PROMPTS.summarize(transcript);
        } else if (feature === "notes") {
            promptText = PROMPTS.notes(transcript);
        }

        const response = await withBackoff(() => client.models.generateContent({
            model: "gemini-2.5-flash",
            contents: promptText,
            config: {
                systemInstruction: `You are a helpful assistant. Always respond in the language: ${locale}.`
            }
        }));

        let text = response.text || "";

        // Clean up markdown code blocks if the AI accidentally included them
        if (text.startsWith("```json")) {
            text = text.replace(/```json\n?/, "").replace(/\n?```/, "");
        } else if (text.startsWith("```")) {
            text = text.replace(/```\n?/, "").replace(/\n?```/, "");
        }

        if (feature === "flashcards") {
            try {
                const data = JSON.parse(text.trim());
                return NextResponse.json({ data });
            } catch (e) {
                console.error("Failed to parse AI JSON response:", text);
                return NextResponse.json({ error: "AI generated invalid flashcard format" }, { status: 500 });
            }
        }

        return NextResponse.json({ data: text });
    } catch (error: any) {
        console.error("Gemini AI Error:", error);
        return NextResponse.json({ error: "Failed to process AI request" }, { status: 500 });
    }
}

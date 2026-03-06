export const PROMPTS = {
    summarize: (transcript: string) => `
        You are an expert educational assistant. Your task is to provide a concise, structured, and insightful summary based on the following lecture transcript.
        
        Guidelines:
        1. Extract the core concepts and main takeaways.
        2. Use bullet points for readability.
        3. Highlight important terminology or formulas mentioned.
        4. Keep the tone professional yet encouraging for a student.
        5. The summary should be around 200-300 words.

        Transcript:
        ${transcript}
    `,
    notes: (transcript: string) => `
        You are a highly efficient note-taker. Transform the following transcript into organized, comprehensive study notes.
        
        Structure:
        - Topic Overview
        - Key Definitions
        - Detailed Explanations of Concepts
        - Examples Provided (if any)
        - Summary of Conclusions

        Transcript:
        ${transcript}
    `,
    flashcards: (transcript: string, count: number = 10) => `
        You are an elite educational assistant. Your task is to extract exactly ${count} key concepts from the following lecture transcript and turn them into high-quality flashcards for active recall.

        Return ONLY a JSON array of objects with the following structure:
        [
            { "question": "Concise, clear question about a core concept", "answer": "Brief, accurate answer explaining the concept" }
        ]

        Guidelines:
        1. Focus on the most important definitions, concepts, and relationships.
        2. Ensure questions are specific and answers are concise.
        3. Do not include any markdown formatting like \`\`\`json or extra text, just the raw JSON array.
        4. Generate exactly ${count} cards.

        Transcript:
        ${transcript}
    `
};

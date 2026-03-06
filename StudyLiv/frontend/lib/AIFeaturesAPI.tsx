class AIFeaturesAPI {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private async request<T>(endpoint: string, options: RequestInit): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    ...options.headers,
                },
            });

            const result = await response.json();

            if (!response.ok) {
                return { error: result.error || `Request failed with status ${response.status}` };
            }

            return result as T;
        } catch (error: any) {
            console.error(`API Request Error (${endpoint}):`, error);
            return { error: error.message || "An unexpected error occurred" };
        }
    }

    async getTranscript(audioUrl: string) {
        return this.request<any>("api/transcribe", {
            method: "POST",
            body: JSON.stringify({ audioUrl }),
        });
    }

    async getSummary(transcript: string) {
        return this.request<string>("api/ai/feature?feature=summarize", {
            method: "POST",
            body: JSON.stringify({ transcript }),
        });
    }

    async getNotes(transcript: string) {
        return this.request<string>("api/ai/feature?feature=notes", {
            method: "POST",
            body: JSON.stringify({ transcript }),
        });
    }

    async getFlashCards(transcript: string, count: number) {
        return this.request<any>("api/ai/feature?feature=flashcards", {
            method: "POST",
            body: JSON.stringify({ transcript, count }),
        });
    }
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
export const featureApi = new AIFeaturesAPI(baseUrl);

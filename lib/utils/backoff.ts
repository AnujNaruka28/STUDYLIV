/**
 * Executes a function with exponential backoff.
 * 
 * @param fn The async function to execute.
 * @param maxRetries Maximum number of retries.
 * @param baseDelay Initial delay in milliseconds.
 * @returns The result of the function call.
 */
export async function withBackoff<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
): Promise<T> {
    let lastError: any;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error: any) {
            lastError = error;

            // Log the error and attempt
            console.error(`Attempt ${attempt + 1} failed:`, error.message || error);

            // Check if we should retry (e.g., 429 or 5xx)
            // Note: Some SDKs throw specific error objects, we might need to broaden this check
            const status = error.status || error.statusCode || (error.response && error.response.status);

            // Only retry on rate limits or server errors
            const shouldRetry = status === 429 || (status >= 500 && status < 600) || error.message?.includes('fetch failed') || error.message?.includes('timeout');

            if (attempt === maxRetries || !shouldRetry) {
                break;
            }

            // Calculate delay: baseDelay * 2^attempt + random jitter
            const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 100;
            console.log(`Retrying in ${Math.round(delay)}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw lastError;
}

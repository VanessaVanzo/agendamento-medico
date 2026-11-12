import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';

export const modelo = new ChatOpenAI({
    model: 'openrouter/free',
    temperature: 0,
    apiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
        baseURL: 'https://openrouter.ai/api/v1',
    },
});
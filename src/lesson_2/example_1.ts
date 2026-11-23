import "dotenv/config";
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic();

const response = await client.messages.create({
    model: 'claude-haiku-4-5',
    max_tokens: 1024,
    messages: [
        {
            role: 'user',
            content: 'Hello, how are you?'
        }
    ]
});

console.log(response);



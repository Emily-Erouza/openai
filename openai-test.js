import OpenAI from "openai";
// import { RateLimitError } from './path/to/rateLimitErrorModule';

const openai = new OpenAI({
    apiKey: "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",
    organization:'org-Q3GwCXt8MUlhihmcqzoSByxD'
  });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }, 
    {role: "user", content: "Who won the world series in 2020?"},],
 
    model: "gpt-3.5-turbo",
    temperature: 0.7
  });

  console.log(completion.choices[0]);
}

main();
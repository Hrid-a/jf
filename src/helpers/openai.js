import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;
// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });

//   console.log(completion.choices);
// }

// main();
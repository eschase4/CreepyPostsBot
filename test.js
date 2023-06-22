// const axios = require('axios');
// require('dotenv').config({ path: __dirname + '/.env' });

// const apiKey = process.env.OPENAI_API_KEY;

// const checkAvailableModels = async () => {
//   try {
//     const response = await axios.get('https://api.openai.com/v1/engines', {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     const models = response.data.data;
//     console.log(models);
//   } catch (error) {
//     console.error('Error:', error.response.data.error);
//   }
// };

// checkAvailableModels();
const test = Math.floor(Math.random() * 63 + 1)

console.log(test, Math.random())

// curl --location --insecure --request POST 'https://api.openai.com/v1/chat/completions' \
// --header 'Authorization: Bearer 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' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//  "model": "text-davinci-003",
//  "messages": [{"role": "user", "content": "What is the OpenAI mission?"}]
// }'
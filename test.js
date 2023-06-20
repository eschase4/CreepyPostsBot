const axios = require('axios');
require('dotenv').config({ path: __dirname + '/.env' });

const apiKey = process.env.OPENAI_API_KEY;

const checkAvailableModels = async () => {
  try {
    const response = await axios.get('https://api.openai.com/v1/engines', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const models = response.data.data;
    console.log(models);
  } catch (error) {
    console.error('Error:', error.response.data.error);
  }
};

checkAvailableModels();

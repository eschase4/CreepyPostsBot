require("dotenv").config();
const CronJob = require("cron").CronJob;
const { twitterClient, openai } = require("./twitterClient.js");
const axios = require("axios");
const { sleep } = require('./utils');

console.log(process.env.OPENAI_API_KEY)
async function generateCreepyStory() {
  const data = {
    prompt: 'Write a short horror story for a tweet',
    max_tokens: 50,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  const url = 'https://api.openai.com/v1/engines/curie:ft-personal-2023-06-20-04-31-23/completions';

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data.choices[0].text)
    return response.data.choices[0].text.trim();
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.log('Rate limit exceeded. Retrying after backoff...');
      await sleep(5000); // Wait for 5 seconds before retrying
      return generateCreepyStory(); // Retry the request
    }

    console.error('Failed to generate creepy story');
    // console.error(error);
    throw error;
  }
}

async function tweet() {
    try {
      const story = await generateCreepyStory();
      console.log('Creepy story:', story);
  
      const client = twitterClient; // Use the Twitter client
      const response = await client.v2.tweet(story)
  
      console.log('Tweeted successfully:', response);
    } catch (error) {
      // Handle any errors that occurred during the tweet process
      console.error('Failed to tweet');
      console.error(error);
    }
  }
  
  const cronTweet = new CronJob("33 * * * *", async () => {
    tweet();
  });
  
  cronTweet.start();

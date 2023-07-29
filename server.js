const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the assigned port from Heroku or a default port

require('./index')

app.get('/', (req, res) => {
  res.send("BEEP BOOP BEEP BOOB! I am just a twitter bot! There is nothing to see here!! Feel free to check out my posts and follow me here:  https://twitter.com/CreepyPostBot n\ Checkout the source code here: https://github.com/eschase4/CreepyPostsBot" );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});S
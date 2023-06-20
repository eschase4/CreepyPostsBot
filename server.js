const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the assigned port from Heroku or a default port

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
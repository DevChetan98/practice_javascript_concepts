const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware to parse cookies
app.use(cookieParser());

// Example route handler
app.get('/', (req, res) => {
  // Accessing cookies parsed by cookieParser middleware
  console.log(req.cookies);
  
  // Respond to the client
  res.send('Cookies parsed successfully!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

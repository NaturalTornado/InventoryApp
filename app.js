// app.js - rev. 02

const express = require('express');
const path = require('path');
const pageRouter = require('./routes/pageRouter.js');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', pageRouter);

// Start the server on port 3000 or the specified environment port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on Port ${PORT}!`);
});

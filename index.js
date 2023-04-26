require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('./utils/logger');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Import your routes and middleware here
app.use('/api', require('./routes'));

server.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

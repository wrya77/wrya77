const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Initialize app and server
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Store the story globally
let story = ["Once upon a time..."];

// Serve static files (frontend)
app.use(express.static('public'));

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Send the current story to the new user
  socket.emit('updateStory', story);

  // Listen for new sentences
  socket.on('newSentence', (sentence) => {
    story.push(sentence); // Add the sentence to the story
    io.emit('updateStory', story); // Broadcast the updated story to all users
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
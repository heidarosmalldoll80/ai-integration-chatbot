const express = require('express');
const bodyParser = require('body-parser');
const { Chatbot } = require('./chatbot');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const chatbot = new Chatbot();

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;
  const botResponse = chatbot.getResponse(userMessage);
  res.json({ response: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
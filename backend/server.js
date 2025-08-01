const express = require('express');
const cors = require('cors');
const chatbotRoute = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoute);

app.get('/', (req, res) => {
  res.send('Freelanchal Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

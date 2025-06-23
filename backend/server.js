import express from 'express';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.js';

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'https://ishivaniyadav.github.io/HiveNimble/'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());
app.use('/api', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

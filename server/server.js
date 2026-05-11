const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://portfolio-chi-navy-81.vercel.app/'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());


// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

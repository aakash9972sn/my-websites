const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const razorpay = require('razorpay');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ultimateprep');

// Routes
app.post('/auth/login', (req, res) => {
  // Authenticate user
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.json({ token });
});

app.post('/tests/:id/submit', authenticateUser, (req, res) => {
  // Save test results
  res.json({ score: 95, percentile: 87 });
});

// Razorpay Integration
const rzp = new razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET'
});

app.post('/payments/create-order', authenticateUser, async (req, res) => {
  const order = await rzp.orders.create({
    amount: req.body.amount,
    currency: 'INR'
  });
  res.json(order);
});

app.listen(3000, () => console.log('Server running on port 3000'));

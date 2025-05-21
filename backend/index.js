const Output = require('./models/Output');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
//These lines use the PORT given in your .env file, or 
//port 5000 as default.

// Middleware
app.use(cors());
app.use(express.json()); // lets us parse JSON in requests. 
// We do this because MongoDB uses JSON data.

// Test route
app.get('/test', (req, res) => {
  res.send('Hello from the backend!');
});

//Here’s a basic post and get request:
app.post('/api/output', async (req, res) => {
  try {
    const newOutput = new Output({ input: req.body.input });
    await newOutput.save();
    res.status(201).json(newOutput);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save input.' });
  }
});

app.get('/api/output', async (req, res) => {
  try {
    const outputs = await Output.find().sort({ _id: -1 });
    res.json(outputs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get outputs.' });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
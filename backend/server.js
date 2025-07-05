require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Simplified MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Connection error:", err));

// Start server
const PORT = process.env.PORT || 5001; // Changed default port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const mongoose = require('mongoose');
require('dotenv').config();

// Debugging
if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined. Check your .env file.');
}

// Connecting to MongoDB
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => console.log(e));

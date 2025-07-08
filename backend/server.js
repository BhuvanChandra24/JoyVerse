// ==== server.js ====

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authroute.js';
import userRoutes from './routes/userroute.js';
import gameRoutes from './routes/gameroute.js'; // Game session routes

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// ✅ Enable CORS with correct origin for Vercel
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// Parse JSON bodies from incoming requests
app.use(express.json());

// Routes
app.use('/backend/auth', authRoutes);   // Authentication routes
app.use('/backend/users', userRoutes);  // User profile routes
app.use('/backend/games', gameRoutes);  // Game session routes

// Catch-all 404 route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found: ' + req.originalUrl });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { dbName: 'cluster0' })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

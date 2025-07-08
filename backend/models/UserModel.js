import mongoose from "mongoose";

const emotionLogSchema = new mongoose.Schema({
  gameName: String,
  questionNumber: Number,
  emotion: String,
  score: Number,
  timestamp: { type: Date, default: Date.now }
});

const gamePlaySchema = new mongoose.Schema({
  gameName: String,
  finalScore: Number,
  timestamp: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  parentName: String,
  parentContact: String,
  childAge: Number,
  role: {
    type: String,
    enum: ["user", "therapist", "admin"], // ✅ Fixed
    default: "user"
  },
  isApproved: {
    type: Boolean,
    default: function () {
      return this.role !== "therapist"; // Only therapists require approval
    },
  },
  suggestedGames: [String],
  emotions: [emotionLogSchema],
  gamePlays: [gamePlaySchema]
});

export default mongoose.model("User", userSchema);


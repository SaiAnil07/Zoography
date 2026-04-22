import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import ticketRoutes from "./routes/ticketRoutes";
import zooRoutes from "./routes/zooRoutes";
import donationRoutes from "./routes/donationRoutes";
import feedbackRoutes from "./routes/feedbackRoutes";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));
app.get("/", (req, res) => res.send("Zoography Backend Running"));
app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/zoos", zooRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/feedbacks", feedbackRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



import { Request, Response } from "express";
import Feedback from "../models/Feedback";
export const submitFeedback = async (req: Request, res: Response) => {
  try {
    const { zoo, rating, title, text } = req.body;

    if (!zoo || !rating || !title || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const feedback = new Feedback({
      zoo,
      rating,
      title,
      text,
      date: new Date(),
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Feedback submission error:", error);
    res.status(500).json({ message: "Server error while submitting feedback" });
  }
};
export const getFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ message: "Failed to fetch feedbacks" });
  }
};

import { Router } from "express";
import Donation from "../models/Donations";
const router = Router();
router.post("/", async (req, res) => {
  try {
    const { name, email, amount, message } = req.body;
    if (!name || !email || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const donation = new Donation({ name, email, amount, message });
    await donation.save();
    res.json({ message: "Donation received successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to process donation" });
  }
});
router.get("/", async (_req, res) => {
  const donations = await Donation.find().sort({ date: -1 });
  res.json(donations);
});
export default router;

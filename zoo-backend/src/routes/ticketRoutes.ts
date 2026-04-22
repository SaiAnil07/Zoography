import { Router } from "express";
import Ticket from "../models/Tickets";
const router = Router();
router.post("/book", async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.json({ message: "Ticket booked successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to book ticket" });
  }
});
router.get("/", async (_req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});
export default router;

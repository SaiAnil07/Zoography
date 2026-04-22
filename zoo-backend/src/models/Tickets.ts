import mongoose, { Schema, Document } from "mongoose";
export interface ITicket extends Document {
  zoo: string;
  date: string;
  timeSlot: string;
  adults: number;
  children: number;
  seniors: number;
}
const ticketSchema = new Schema<ITicket>({
  zoo: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  adults: Number,
  children: Number,
  seniors: Number,
});
export default mongoose.model<ITicket>("Ticket", ticketSchema);

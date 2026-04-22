import mongoose, { Schema, Document } from "mongoose";
export interface IDonation extends Document {
  name: string;
  email: string;
  amount: number;
  message?: string;
  date: Date;
}
const donationSchema = new Schema<IDonation>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IDonation>("Donation", donationSchema);

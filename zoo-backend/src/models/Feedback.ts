import mongoose, { Schema, Document } from "mongoose";
export interface IFeedback extends Document {
  zoo: string;
  rating: number;
  title: string;
  text: string;
  date: Date;
}
const feedbackSchema = new Schema<IFeedback>({
  zoo: { type: String, required: true },
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
export default mongoose.model<IFeedback>("Feedback", feedbackSchema);

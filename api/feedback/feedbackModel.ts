/* Feedback interface and mongoose schema&model */
import { Schema, model } from 'mongoose';
import joi from 'joi';


type FeedbackType = 'Bug' | 'Suggestion';

interface Feedback{
    name: string;
    email: string;
    type: FeedbackType;
    title: string;
    message: string;
    date: Date;
}

const feedbackSchema = new Schema<Feedback>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, enum: ['Bug', 'Suggestion'], required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
});

const feedbackModel = model<Feedback>('Feedback', feedbackSchema);




export { FeedbackType, Feedback, feedbackModel };
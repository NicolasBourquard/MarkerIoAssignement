import joi from 'joi';
import { Feedback } from './feedbackModel';

const feedbackSchema = joi.object<Feedback>({
    name: joi.string().required().max(50),
    email: joi.string().required().max(100).email(),
    type: joi.string().required().valid('Bug', 'Suggestion'),
    title: joi.string().required().max(50),
    message: joi.string().required().max(5000),
    date: joi.date().required(),
});

function validateFeedback(feedback: Feedback){
    return feedbackSchema.validate(feedback);
}

export { validateFeedback };
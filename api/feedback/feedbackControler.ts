/*  API methods (Get & Post feedback) */

import { Request, Response, NextFunction } from "express";
import { Feedback, FeedbackType, feedbackModel } from './feedbackModel'; 
import { validateFeedback } from "./feedbackValidator";

async function get(req: Request, res: Response, next: NextFunction){
    try{
        let feedbacks = await feedbackModel.find();
        res.status(200).send(feedbacks);
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}


async function post(req: Request, res: Response, next: NextFunction){
    try{
        //Validate feedback sent from client and save it.
        const valid = validateFeedback(req.body);
        if(valid.error)
            return res.status(400).send(valid.error);
        await new feedbackModel(valid.value).save();
        res.status(200).send();
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

export { get, post };
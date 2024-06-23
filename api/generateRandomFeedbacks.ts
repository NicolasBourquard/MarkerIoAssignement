/*   Call this code to generate random feedback in the database */

import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/feedback").then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);

import { Feedback, feedbackModel } from './feedback/feedbackModel';


const MESSAGE = `Hi Team,\n

I encountered a bug in [software/product name] version [version number]. When I try to save a file, the application crashes. Here’s what happens:\n

I was [describe the activity, e.g., “editing a document”] and clicked on save. Instead of saving, the app crashed immediately.\n

Here’s how you can reproduce the issue:\n

	1.	Open [feature or section].\n
	2.	Make changes.\n
	3.	Click on the save button.\n

I expected it to save my work, but instead, it crashes every time.\n

I’m using [operating system] on [basic hardware info]. If relevant, I’m on [browser name and version].\n

I’ve attached screenshots and logs that might help.\n

Thanks for looking into this!\n

Best,`;

 


async function generateFeedbacks(){
    console.log('Starting feedbacks generation');
    for(let i=0; i<100; i++){
        let feedback: Feedback = {
            name: 'test',
            email: 'test@test.com',
            type: Math.random() > 0.2 ? 'Bug' : 'Suggestion',
            title: 'Feedback title ' + (Math.random() + 1).toString(36).substring(7), //Feedback title + 5 random char
            message: MESSAGE,
            date: new Date(Date.now() - Math.floor(Math.random()*7*24*3600*1000)), //Generate random date in the last 7 days
        };

        await new feedbackModel(feedback).save();
    }
    console.log('Done!');
}

generateFeedbacks().then(()=>{});
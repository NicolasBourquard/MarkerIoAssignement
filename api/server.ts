import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/feedback").then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as feedbackControler from './feedback/feedbackControler.ts';

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true })); 


const PORT = process.env.PORT || 3000;


//routes
app.get('/api/feedback', feedbackControler.get);

app.post('/api/feedback', feedbackControler.post);





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



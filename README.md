## Assignement Marker.io  Done by Nicolas Bourquard

### What's been done

#### Frontend

Frontend code is inside the src folder
Page that save new feedback with input validation (NewFeedback.vue in newFeedback folder)
List of selectable feedbacks that can be sorted and filtered with pagination (in allFeedbacks folder)

#### Backend

Backend code is inside the api folder
Post method on /api/feedback to store a new feedback in the database (with validation)
Get method on /api/feedback to get all feedbacks
generateRandomFeedback.ts is a utility file to generate 100 random feedback for testing purposes
MongoDB database is named feedback

### Setup

Install dependencies
`npm install`

Run the backend
`npm run api`

Run the frontend with vite
`npm run dev`

Optional: Generate random feedback in the database
`npm run generate-feedbacks`
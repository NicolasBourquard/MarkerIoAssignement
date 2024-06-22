import { defineStore } from 'pinia'
import { Feedback } from '../types/feedback';
import { ref } from 'vue';
import { mande } from 'mande'

const api = mande('http://localhost:3000/api/feedback');


export const useFeedbacksStore = defineStore('feedbacks', () => {
    const feedbacks = ref([] as Feedback[]);
    
    async function newFeedback(feedback: Feedback){
        try{
            await api.post(feedback);
            feedbacks.value.push(feedback);
        }catch(err){
            console.error(err);
        }
    }

    async function getFeedbacks(){
        try{
            let res = await api.get<Feedback[]>();
            for(let feedback of res)
                feedback.date = new Date(feedback.date);
            feedbacks.value = res;

        }catch(err){
            console.error(err);
        }
    }

    getFeedbacks();
    
    return { feedbacks, newFeedback, getFeedbacks };
});
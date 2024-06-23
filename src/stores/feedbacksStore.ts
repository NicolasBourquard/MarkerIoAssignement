/*  Feedbacks store that also handle retrieving the feedbacks from the API and posting the new feedbacks */
import { defineStore } from 'pinia'
import { Feedback } from '../types/feedback';
import { ref } from 'vue';
import { mande } from 'mande';
import {useToast} from 'vue-toast-notification';

const api = mande('http://localhost:3000/api/feedback');


export const useFeedbacksStore = defineStore('feedbacks', () => {
    const feedbacks = ref([] as Feedback[]);
    const $toast = useToast();
    
    async function newFeedback(feedback: Feedback){
        try{
            await api.post(feedback); //Post feedback then store it to the store once API confirm it's been saved
            feedbacks.value.push(feedback);
            $toast.success('Feedback added!', { position: 'bottom' });
            return feedback;
        }catch(err){
            $toast.error('Error: ' + err, { position: 'bottom' });
            console.error(err);
            return undefined;
        }
    }

    async function getFeedbacks(){
        try{
            let res = await api.get<Feedback[]>();
            for(let feedback of res)  //Date is in a string format instead of a date object when retrieving the feedbacks from the API. 
                feedback.date = new Date(feedback.date); //So convert every dates to a date object
            feedbacks.value = res;

        }catch(err){
            $toast.error('Error, couldn\'t load feedbacks: ' + err, { position: 'bottom' });
            console.error(err);
        }
    }

    getFeedbacks();
    
    return { feedbacks, newFeedback, getFeedbacks };
});
import { defineStore } from 'pinia'
import { Feedback } from '../types/feedback';
import { ref } from 'vue';


export const useFeedbacksStore = defineStore('feedbacks', () => {
    console.log('!!')
    const feedbacks = ref([] as Feedback[]);
    
    function newFeedback(feedback: Feedback){
        console.log('?')
        feedbacks.value.push(feedback);
        console.log(feedbacks.value);
    }
    
    return { feedbacks, newFeedback };
});
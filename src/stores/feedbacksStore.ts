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

    //Load all feedbacks
    async function loadFeedbacks(){
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



    //Sort feedbacks by field
    function sortFeedbacks(sortBy: string){
        if(sortBy === 'date')
            feedbacks.value.sort((f1, f2) => f2.date.getTime() - f1.date.getTime());
        if(sortBy === 'name')
            feedbacks.value.sort((f1, f2) => f1.name.localeCompare(f2.name));
        if(sortBy === 'title')
            feedbacks.value.sort((f1, f2) => f1.title.localeCompare(f2.title));
    }


    //Get feedbacks to display in the list based on the filter, sorting and page
    function getDisplayedFeedbacks(filterBy = '', sortBy = '', page = 1, perPage = 20){
        //Create a shallow copy and filter if needed
        let filteredFeedbacks = feedbacks.value.filter(feedback => !filterBy || feedback.type === filterBy);

        //Sort the filtered feedback if needed
        if(sortBy === 'date')
            filteredFeedbacks.sort((f1, f2) => f2.date.getTime() - f1.date.getTime());
        if(sortBy === 'name')
            filteredFeedbacks.sort((f1, f2) => f1.name.localeCompare(f2.name));
        if(sortBy === 'title')
            filteredFeedbacks.sort((f1, f2) => f1.title.localeCompare(f2.title));

        const nbPages = Math.ceil(filteredFeedbacks.length / perPage);
        if(page > nbPages || page < 0) //if page requested is not valid, return full list
            return filteredFeedbacks;

        return filteredFeedbacks.slice((page-1)*perPage, Math.min(page*perPage-1, filteredFeedbacks.length));
    }

    //Get number of filtered feedbacks 
    function getFilteredFeedbacksCount(filterBy = ''){
        if(!filterBy)
            return feedbacks.value.length;

        return feedbacks.value.filter(feedback => feedback.type === filterBy).length;
    }






    loadFeedbacks(); //Call get feedbacks on init
    
    return { feedbacks, newFeedback, getDisplayedFeedbacks, getFilteredFeedbacksCount, sortFeedbacks };
});
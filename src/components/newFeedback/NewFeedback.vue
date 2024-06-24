<template>
    <div class="bg-slate-50 h-full mt-5 pt-20">
        <div class="max-w-[773px] m-auto bg-white rounded shadow">
            <h1 class="font-medium text-[24px] text-slate-800 border-b border-slate-150 p-2 pl-5">Add new feedback</h1>
            <form class="p-10 pt-5">
                <div class="mb-4 max-w-[300px]">
                    <label class="font-medium text-[16px] text-slate-800" for="name">Name</label>
                    <input id="name" type="text" v-model="name" class="border rounded w-full py-2 px-3 text-gray-700">
                </div>
                <div class="mb-4 max-w-[300px]">
                    <label class="font-medium text-[16px] text-slate-800" for="email">Email</label>
                    <input id="email" type="text" v-model="email" class="border rounded w-full py-2 px-3 text-gray-700">
                </div>
                <div class="mb-4 max-w-[300px]">
                    <label class="font-medium text-[16px] text-slate-800" for="type">Type</label>
                    <select id="type" v-model="type" class="border rounded w-full py-2 px-3 text-gray-700 bg-white">
                        <option value="Bug">Bug</option>
                        <option value="Suggestion">Suggestion</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="font-medium text-[16px] text-slate-800" for="title">Title</label>
                    <input id="title" type="text" v-model="title" class="border rounded w-full py-2 px-3 text-gray-700">
                </div>
                <div class="mb-4">
                    <label class="font-medium text-[16px] text-slate-800" for="message">Message</label>
                    <textarea id="message" v-model="message" class="border rounded w-full py-2 px-3 text-gray-700 min-h-[166px]"/>
                </div>

                <div v-show="error">
                    <p class="text-red-500 text-center">{{ error }}</p>
                </div>

                <div class="flex justify-end">
                    <button @click="discard()" class="bg-[#EAF0F6] text-slate-800 text-[14px] font-bold py-2 px-4 rounded mr-3" type="button">
                        Discard
                    </button>
                    <button @click="sendFeedback" class="bg-emerald-400 text-white text-[14px] font-bold py-2 px-4 rounded" type="button">
                        Send feedback
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
/* Form to add new feedbacks */
import { ref } from 'vue'
import { Feedback, FeedbackType } from '../../types/feedback';
import { useFeedbacksStore } from '../../stores/feedbacksStore';

const name = ref('');
const email = ref('');
const type = ref<FeedbackType>('Bug');
const title = ref('');
const message = ref('');

const error = ref('');

const feedbacksStore = useFeedbacksStore();


//Regex check that email is correct
function checkMail(email: string){
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
}


//Validate feedback data (make sure fields arent empty and that the email is correct) and display an error message if there is a problem
function validateFeedback(){
    error.value = '';
    if(!name.value)
        error.value = 'Please enter a name';
    else if(!checkMail(email.value))
        error.value = 'Please enter a valid email';
    else if(!title.value)
        error.value = 'Please enter a title';
    else if(!message.value)
        error.value = 'Please enter a message';

    return error.value === ''; //If there is no error found during validation, error message should be empty
}

//Reset form to empty values
function discard(){
    name.value = '';
    email.value = '';
    title.value = '';
    message.value = '';

    error.value = '';
}

async function sendFeedback(){
    let feedback: Feedback = { name: name.value, email: email.value, type: type.value, title: title.value, message: message.value, date: new Date() };

    if(!validateFeedback())
        return;

    if(await feedbacksStore.newFeedback(feedback)){
        discard(); //Discard current feedback data once it's been added and saved on the backend
    }
    
}

</script>
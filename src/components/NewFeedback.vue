<template>
    <div class="container mx-auto">
        <form>
            <h1 class="font-medium text-[24px] text-slate-800">Add new feedback</h1>

            <div class="mb-4">
                <label class="font-medium text-[16px] text-slate-800" for="name">Name</label>
                <input id="name" type="text" v-model="name" class="border rounded w-full py-2 px-3 text-gray-700">
            </div>
            <div class="mb-4">
                <label class="font-medium text-[16px] text-slate-800" for="email">Email</label>
                <input id="email" type="text" v-model="email" class="border rounded w-full py-2 px-3 text-gray-700">
            </div>
            <div class="mb-4">
                <label class="font-medium text-[16px] text-slate-800" for="type">Type</label>
                <select id="type" v-model="type" class="border rounded w-full py-2 px-3 text-gray-700">
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
                <textarea id="message" v-model="message" class="border rounded w-full py-2 px-3 text-gray-700"/>
            </div>

            <button @click="discard()" class="bg-[#EAF0F6] text-[#1E293B] text-[14px] font-bold py-2 px-4 rounded mr-3" type="button">
                Discard
            </button>
            <button @click="sendFeedback" class="bg-[#34D399] text-white text-[14px] font-bold py-2 px-4 rounded" type="button">
                Send feedback
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Feedback, FeedbackType } from '../types/feedback';
import { useFeedbacksStore } from '../stores/feedbacksStore';

const name = ref('');
const email = ref('');
const type = ref<FeedbackType>('Bug');
const title = ref('');
const message = ref('');

const feedbacksStore = useFeedbacksStore();

async function sendFeedback(){
    let feedback: Feedback = { name: name.value, email: email.value, type: type.value, title: title.value, message: message.value, date: new Date() };
    await feedbacksStore.newFeedback(feedback);
}

function discard(){
    name.value = '';
    email.value = '';
    title.value = '';
    message.value = '';
}

</script>
<template>
    <div class="container mx-auto">
        <form>
            <h1>Add new feedback</h1>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input id="name" type="text" v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input id="email" type="text" v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="type">Type</label>
                <select id="type" v-model="type" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Bug">Bug</option>
                    <option value="Suggestion">Suggestion</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
                <input id="title" type="text" v-model="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                <textarea id="message" v-model="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <button @click="sendFeedback" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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

</script>
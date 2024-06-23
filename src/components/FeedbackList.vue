<template>
    <div class="h-full bg-[#F8FAFC]">
        <template v-for="(feedback, i) in feedbacksStore.feedbacks" :key="i">
            <FeedbackPreview :feedback="feedback" :selected="selected === feedback" @click="selectFeedback(feedback)"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFeedbacksStore } from '../stores/feedbacksStore';
import { Feedback } from '../types/feedback';
import FeedbackPreview from './FeedbackPreview.vue';

const feedbacksStore = useFeedbacksStore();

const selected = defineModel<Feedback>(); //Selected feedback is a v-model

function selectFeedback(feedback: Feedback){
    selected.value = feedback;
}


</script>
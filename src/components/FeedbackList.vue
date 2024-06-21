<template>
    <div class="h-full">
        <template v-for="(feedback, i) in feedbacksStore.feedbacks" :key="i">
            <FeedbackPreview :feedback="feedback"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useFeedbacksStore } from '../stores/feedbacksStore';
import FeedbackPreview from './FeedbackPreview.vue';

const feedbacksStore = useFeedbacksStore();

</script>
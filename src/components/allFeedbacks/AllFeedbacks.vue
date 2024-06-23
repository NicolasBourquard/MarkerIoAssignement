<template>
    <div class="flex flex-row h-full">
        <FeedbackList v-model="selectedFeedback" class="basis-1/3"/>
        <FeedbackView :feedback="selectedFeedback" class="basis-2/3"/>
    </div>
</template>

<script setup lang="ts">
import { Feedback } from '../../types/feedback';
import FeedbackList from './FeedbackList.vue'
import FeedbackView from './FeedbackView.vue'
import { ref } from 'vue'

const selectedFeedback = ref<Feedback>();

</script>
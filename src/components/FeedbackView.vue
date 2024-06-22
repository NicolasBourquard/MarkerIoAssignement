<template>
    <div class="h-full">
        <div v-if="feedback">
            <img v-if="feedback.type === 'Bug'" :src="bug"/>
            <img v-if="feedback.type === 'Suggestion'" :src="suggestion"/>
            <p>{{  timeAgo(feedback) }} ago</p>
            <h1>{{ feedback.title }}</h1>
            <p>{{  feedback.name }} ( {{ feedback.email }})</p>
            <p> {{  feedback.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Feedback, timeAgo } from '../types/feedback';
import bug from '@/assets/bug.svg';
import suggestion from '@/assets/suggestion.svg';

const props = defineProps<{
    feedback?: Feedback
}>();


</script>
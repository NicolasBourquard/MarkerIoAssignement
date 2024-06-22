<template>
    <div :class="selected ? 'bg-slate-200' : ''">
        <img v-if="feedback.type === 'Bug'" :src="bug"/>
        <img v-if="feedback.type === 'Suggestion'" :src="suggestion"/>
        <h2>{{  feedback.title }}</h2>
        <p>{{  feedback.name }}</p>
        <p>{{  timeAgo(feedback) }} ago</p>
    </div>
</template>

<script setup lang="ts">
import bug from '@/assets/bug.svg';
import suggestion from '@/assets/suggestion.svg';
import { Feedback, timeAgo } from '../types/feedback';

const props = defineProps<{
    feedback: Feedback,
    selected: boolean,
}>();
</script>

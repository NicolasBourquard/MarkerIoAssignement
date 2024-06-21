<template>
    <div :class="selected ? 'bg-slate-200' : ''">
        <h2>{{  feedback.title }}</h2>
        <p>{{  feedback.name }}</p>
        <p>{{  timeAgo(feedback) }} ago</p>
    </div>
</template>

<script setup lang="ts">
import { Feedback, timeAgo } from '../types/feedback';

const props = defineProps<{
    feedback: Feedback,
    selected: boolean,
}>();
</script>

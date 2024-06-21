<template>
    <div class="h-full">
        <div v-if="feedback">
            <p>{{  timeAgo(feedback) }} ago</p>
            <h1>{{ feedback.title }}</h1>
            <p>{{  feedback.name }} ( {{ feedback.email }})</p>
            <p> {{  feedback.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Feedback, timeAgo } from '../types/feedback';

const props = defineProps<{
    feedback?: Feedback
}>();


</script>
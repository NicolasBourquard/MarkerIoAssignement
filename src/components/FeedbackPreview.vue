<template>
    <div>
        <h2>{{  feedback.title }}</h2>
        <p>{{  feedback.name }}</p>
    </div>
</template>

<script setup lang="ts">
import { Feedback } from '../types/feedback';

const props = defineProps<{
    feedback: Feedback
}>();
</script>

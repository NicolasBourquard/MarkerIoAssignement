<template>
    <div class="h-full">
        <div v-if="feedback">
            <p>{{  feedback.date }}</p>
            <h1>{{ feedback.title }}</h1>
            <p>{{  feedback.name }} ( {{ feedback.email }})</p>
            <p> {{  feedback.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Feedback } from '../types/feedback';

const props = defineProps<{
    feedback?: Feedback
}>();

</script>
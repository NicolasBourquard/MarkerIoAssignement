<template>
    <div class="h-full flex justify-center items-center">
        <div v-if="feedback" class="w-full max-w-2xl mt-10 m-auto p-4 flex">
            <div class="mt-6 mr-2">
                <img v-if="feedback.type === 'Bug'" :src="bug"/>
                <img v-if="feedback.type === 'Suggestion'" :src="suggestion"/>
            </div>
            <div class="grow">
                <p class="font-medium text-[12px] text-slate-500">{{  timeAgo(feedback) }} ago</p>
                <h1 class="font-medium text-[24px] text-slate-800">{{ feedback.title }}</h1>
                <p class="font-medium text-[12px] text-slate-500">{{  feedback.name }} ( {{ feedback.email }})</p>
                <p class="font-normal text-[16px] text-slate-800 mt-5"> {{  feedback.message }}</p>
            </div>
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
<template>
    <div :class="selected ? 'bg-[#EAF0F6]' : ''"  class="flex flex-row p-2 pt-1">
        <div class="mt-0.5 mr-1">
            <img v-if="feedback.type === 'Bug'" :src="bug"/>
            <img v-if="feedback.type === 'Suggestion'" :src="suggestion"/>
        </div>
        <div class="grow">  
            <h2 class="font-medium text-[16px] text-slate-800">{{  feedback.title }}</h2>
            <p class="font-medium text-[12px] text-slate-500">{{  feedback.name }}</p>
        </div>

        <div class="flex flex-col justify-end">
            <p class="font-medium text-[12px] text-slate-500">{{  timeAgo(feedback) }} ago</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import bug from '@/assets/bug.svg';
import suggestion from '@/assets/suggestion.svg';
import { Feedback, timeAgo } from '../../types/feedback';

const props = defineProps<{
    feedback: Feedback,
    selected: boolean,
}>();
</script>

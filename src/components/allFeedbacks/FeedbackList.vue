<template>
    <div class="h-full bg-[#F8FAFC] flex flex-col">
        <div class="border-b flex items-center justify-between flex-wrap p-3">
            <div>
                <label class="font-medium text-[12px] text-slate-500 mr-2">Filter</label>
                <select v-model="filterBy" class="font-medium text-[12px] text-slate-500 p-0.5 bg-[#EAF0F6]">
                    <option value="">None</option>
                    <option value="Bug">Bug</option>
                    <option value="Suggestion">Suggestion</option>
                </select>
            </div>

            <div>
                <label class="font-medium text-[12px] text-slate-500 mr-2">Sort</label>
                <select v-model="sortBy" class="font-medium text-[12px] text-slate-500 p-0.5 bg-[#EAF0F6]">
                    <option value="date">Date</option>
                    <option value="name">Name</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
        <div class="flex-grow overflow-y-auto">
            <template v-for="(feedback, i) in feedbacksStore.feedbacks" :key="i">
                <FeedbackPreview v-show="showFeedback(feedback)" :feedback="feedback" :selected="selected === feedback" @click="selectFeedback(feedback)"/>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFeedbacksStore } from '../../stores/feedbacksStore';
import { Feedback } from '../../types/feedback';
import FeedbackPreview from './FeedbackPreview.vue';

const feedbacksStore = useFeedbacksStore();

const selected = defineModel<Feedback>(); //Selected feedback is a v-model. Parent component need to know which feedback is selected to display it

function selectFeedback(feedback: Feedback){
    selected.value = feedback;
}


//Filtering
const filterBy = ref('');

//return true if feedback is allowed to be showed depending of the filter
function showFeedback(feedback: Feedback){
    return !filterBy.value || feedback.type === filterBy.value;
}

//Sorting
const sortBy = ref('');

watch(sortBy, (newSortBy) => {
    feedbacksStore.sortFeedbacks(newSortBy);
});


</script>
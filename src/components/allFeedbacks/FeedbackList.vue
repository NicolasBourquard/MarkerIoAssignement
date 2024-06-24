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
            <template v-for="(feedback, i) in displayedFeedbacks" :key="i">
                <FeedbackPreview :feedback="feedback" :selected="selected === feedback" @click="selectFeedback(feedback)"/>
            </template>
        </div>


        <div class="border-t p-5">
            <Pagination v-model="page" :count="Math.ceil(feedbacksStore.feedbacks.length/ITEMS_PER_PAGES)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFeedbacksStore } from '../../stores/feedbacksStore';
import { Feedback } from '../../types/feedback';
import FeedbackPreview from './FeedbackPreview.vue';
import Pagination from './Pagination.vue';

const feedbacksStore = useFeedbacksStore();

const selected = defineModel<Feedback>(); //Selected feedback is a v-model. Parent component need to know which feedback is selected to display it

function selectFeedback(feedback: Feedback){
    selected.value = feedback;
}


//Filtering, sorting and pagination
const filterBy = ref('');
const sortBy = ref('');
const page = ref(1);
const ITEMS_PER_PAGES = 20;


//Use computed value for the list of feedback to display to only call getDisplayedFeedbacks when filterBy or SortBy change
const displayedFeedbacks = computed(() => { return feedbacksStore.getDisplayedFeedbacks(filterBy.value, sortBy.value, page.value, ITEMS_PER_PAGES)});



</script>
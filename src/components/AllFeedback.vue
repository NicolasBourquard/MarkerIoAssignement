<template>
    <div class="flex flex-row">
        <FeedbackList class="basis-1/3"/>
        <FeedbackView class="basis-2/3"/>
    </div>
</template>

<script setup lang="ts">
import FeedbackList from './FeedbackList.vue'
import FeedbackView from './FeedbackView.vue'
import { ref } from 'vue'

</script>
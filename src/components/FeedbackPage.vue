<template>
    <nav class="flex items-center justify-between flex-wrap bg-[#E2E8F0] p-6">
        <div>
            <img :src="logo"/>
        </div>
        <div>
            <button @click="tab='allFeedback'" type="button" class="">All feedback</button>
            <button @click="tab='newFeedback'" type="button" class="">New feedback</button>
        </div>
    </nav>
    <section class="content">
        <AllFeedback v-show="tab === 'allFeedback'"/>
        <NewFeedback v-show="tab === 'newFeedback'"/>
    </section>
</template>

<script setup lang="ts">
import AllFeedback from './AllFeedback.vue'
import NewFeedback from './NewFeedback.vue'
import logo from '../assets/logo.svg'
import { ref } from 'vue'

const tab = ref('allFeedback');


</script>
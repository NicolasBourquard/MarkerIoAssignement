<template>
    <div class="h-screen">
        <nav class="flex items-center justify-between flex-wrap bg-slate-50 p-1 border-b border-slate-150">
            <div>
                <img :src="logo"/>
            </div>
            <div>
                <button @click="tab='allFeedback'" type="button" :class="buttonClass(tab === 'allFeedback')" class="font-bold text-[14px] py-2 px-4 rounded mr-8">
                    All feedback
                </button>
                <button @click="tab='newFeedback'" type="button" :class="buttonClass(tab === 'newFeedback')" class="font-bold text-[14px] py-2 px-4 rounded mr-10">
                    New feedback
                </button>
            </div>
        </nav>
        <section class="h-full">
            <AllFeedback v-show="tab === 'allFeedback'"/>
            <NewFeedback v-show="tab === 'newFeedback'"/>
        </section>
    </div>
</template>

<script setup lang="ts">
import AllFeedback from './AllFeedback.vue'
import NewFeedback from './NewFeedback.vue'
import logo from '@/assets/logo.png'
import { ref } from 'vue'

const tab = ref('allFeedback');

function buttonClass(selected: boolean){
    if(selected)
        return 'bg-[#34D399] text-white';
    return 'bg-[#EAF0F6] text-[#1E293B]';
}


</script>
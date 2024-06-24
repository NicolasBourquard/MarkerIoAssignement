<template>
    <ul v-if="count && count > 1" class="inline-flex -space-x-px text-base h-10">
        <li>
            <button @click="page = Math.max(1, page-1)" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight font-medium text-[16px] text-slate-800
             bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-emerald-500 hover:text-white">
             <
            </button>
        </li>
        
        <li v-for="i in count" :key="i">
            <button @click="page = i" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight font-medium text-[16px] text-slate-800 bg-white border"
            :class="buttonClass(i)">
                {{ i }}
            </button>
        </li>

        <li>
            <button @click="page = Math.min(count, page+1)" class="flex items-center justify-center px-4 h-10 leading-tight font-medium text-[16px] text-slate-800
             bg-white border border-gray-300 rounded-e-lg hover:bg-emerald-500 hover:text-white">
             >
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
    count?: number
}>();

const page = defineModel<number>({ default: 1 });

function buttonClass(nb: number){
    if(nb === page.value)
        return 'bg-emerald-700 text-white';
    return 'hover:bg-emerald-500 hover:text-white';
}
</script>
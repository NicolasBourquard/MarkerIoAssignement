<template>
    <ul v-if="count && count > 1" class="inline-flex -space-x-px text-base h-10">
        <li>
            <button @click="page = Math.max(1, page-1)" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight font-medium text-[16px] text-slate-800
             bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-emerald-500 hover:text-white">
             <
            </button>
        </li>
        
        <li v-for="i in count" :key="i">
            <button @click="page = i" :class="buttonClass(i)" v-if="showButton(i)"
            class="flex items-center justify-center px-4 h-10 ms-0 leading-tight font-medium text-[16px] text-slate-800 bg-white border">
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
/*Pagination component */
const props = defineProps<{
    count?: number
}>();

const page = defineModel<number>({ default: 1 });

function buttonClass(nb: number){ //Change color if page is selected
    if(nb === page.value)
        return 'bg-emerald-700 text-white';
    return 'hover:bg-emerald-500 hover:text-white';
}


function showButton(nb: number){
    if(!props.count)
        return false;

    if(props.count <= 7) //If 7 pages or less display every numbers
        return true;

    if(nb <= 3 || nb > props.count-3) //Three first and last pages are always displayed
        return true;

    if(page.value === nb) //Selected page is always displayed
        return true;

    return false;
}
</script>
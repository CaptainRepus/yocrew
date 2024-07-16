<template>
    <div class="h-96 w-full flex gap-3 justify-center items-center" v-if="sortedBlog && sortedBlog.length > 0">
        <router-link 
        class="relative w-1/2 h-full overflow-hidden rounded-2xl flex justify-end items-start flex-col" 
        v-if="sortedBlog[0]"
        :to="{ name: 'Article', params: { slug: sortedBlog[0].slug } }">
            <img :src="sortedBlog[0].image_path" alt="image" class="absolute h-full w-full object-cover z-10 transition ease-in hover:scale-105" />
            <div class="flex justify-center items-center py-1 px-3 rounded-2xl font-bold text-xs transition ease-in z-20 mx-3 mb-1" :class="bgFunction(sortedBlog[0].tag)">{{ sortedBlog[0].tag.toUpperCase() }}</div>
            <h1 class="z-20 text-3xl font-bold pb-3 px-3">{{ sortedBlog[0].title }}</h1>
        </router-link>
        <div class="w-[35%] h-full flex flex-col gap-2">
            <router-link 
            class="relative h-1/2 w-full rounded-2xl overflow-hidden flex flex-col justify-end items-start"
            :to="{ name: 'Article', params: { slug: sortedBlog[1].slug } }">
                <img :src="sortedBlog[1].image_path" alt="image" class="absolute h-full w-full object-cover z-10 transition ease-in hover:scale-105">
                <div class="flex justify-center items-center py-1 px-3 rounded-2xl font-bold text-xs transition ease-in z-20 mx-3 mb-1" :class="bgFunction(sortedBlog[1].tag)">{{ sortedBlog[1].tag.toUpperCase() }}</div>
                <h1 class="z-30 text-xl font-bold pb-3 px-3">{{ sortedBlog[1].title }}</h1>
            </router-link>
            <router-link 
            class="relative h-1/2 w-full rounded-2xl overflow-hidden flex flex-col justify-end items-start"
            :to="{ name: 'Article', params: { slug: sortedBlog[2].slug } }">
                <img :src="sortedBlog[2].image_path" alt="image" class="absolute h-full w-full object-cover z-10  transition ease-in hover:scale-105">
                <div class="flex justify-center items-center py-1 px-3 rounded-2xl font-bold text-xs transition ease-in z-20 mx-3 mb-1" :class="bgFunction(sortedBlog[2].tag)">{{ sortedBlog[2].tag.toUpperCase() }}</div>
                <h1 class="z-30 text-xl font-bold pb-3 px-3">{{ sortedBlog[2].title }}</h1>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useBlogStore } from '@/store/useBlogStore.js';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const blogStore = useBlogStore();
const sortedBlog = computed(() => {
    return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
});

const bgFunction = (color) => {
      switch(color){
        case 'CS2':
          return 'bg-yellow-600 text-white hover:bg-yellow-800';
        case 'Gaming':
          return 'bg-green-500 text-white hover:bg-green-700';
        case 'LOL':
          return 'bg-blue-500 text-white hover:bg-blue-700';
        case 'ESPORT':
          return 'bg-purple-500 text-white hover:bg-purple-700';
        case 'SVET':
          return 'bg-lime-500 text-white hover:bg-lime-700';
        case 'BRAWL STARS':
          return 'bg-red-500 text-white hover:bg-red-700';
        default:
          return 'bg-red-500 text-white hover:bg-red-700';
      }
    };
</script>

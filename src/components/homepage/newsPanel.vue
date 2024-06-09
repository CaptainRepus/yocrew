<template>
    <div class="text-center text-xl font-bold w-full h-3/4">
      <div v-if="sortedBlog.length > 0">
        <img :src="sortedBlog[0].cesta_obrazku" alt="Blog Image" class="w-[150%] h-[150%] opacity-50"/>
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </template>
  
  <script setup>
  import { useBlogStore } from '@/store/useBlogStore.js';
  import { computed } from 'vue';
  
  const blogStore = useBlogStore();
  
  const sortedBlog = computed(() => {
    return [...blogStore.articles].sort((a, b) => new Date(a.date) - new Date(b.date));
  });
  </script>
  
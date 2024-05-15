<template>
    <div>
      <!-- Desktop view -->
      <div class="p-3 max-md:hidden">
        <h1 class="pb-0 font-bold text-2xl mb-3">Najnovšie články</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(blog, index) in sortedBlog.slice(0, 4)" :key="index" class="max-w-sm h-[27rem] bg-slate-800 border border-gray-700 rounded-lg shadow">
            <a :href="blog.link">
              <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="Blog Image" />
            </a>
            <div class="p-5">
              <a :href="blog.link">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ blog.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-white">{{ blog.author }}</p>
              <a :href="blog.link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                Pozrieť viac
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <ion-button class="col-span-2" @click="click">Pozrieť všetky články</ion-button>
        </div>
      </div>
  
      <!-- Mobile view -->
      <div class="p-3 px-0 md:hidden">
        <h1 class="font-bold text-2xl mb-3">Najnovšie články</h1>
        <div class="grid grid-cols-1 gap-4">
          <div v-for="(blog, index) in sortedBlog.slice(0, 2)" :key="index" class="max-w-sm bg-slate-800 border border-gray-600 rounded-lg shadow">
            <a :href="blog.link">
              <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="Blog Image" />
            </a>
            <div class="p-5">
              <a :href="blog.link">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ blog.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-white">{{ blog.author }}</p>
              <a :href="blog.link" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                Pozrieť viac
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <ion-button @click="click">Pozrieť všetky články</ion-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useBlogStore } from '@/store/useBlogStore.js';
  import { IonButton } from '@ionic/vue';
  
  export default {
    components: {
      IonButton
    },
    setup() {
      const blogStore = useBlogStore();
  
      const sortedBlog = computed(() => {
        return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
      });
  
      return {
        blogStore,
        sortedBlog
      };
    },
    methods: {
      click() {
        this.$router.push('/clanky');
      }
    }
  };
  </script>  
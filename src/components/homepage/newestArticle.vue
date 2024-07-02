<template>
    <router-link
    :to="{ name: 'Article', params: { slug: blog.slug } }"
    class="w-full h-full bg-slate-700" v-for="(blog, index) in sortedBlog.slice(0, 1)">
        <div class="rounded-xl overflow-hidden h-[49%]">
            <img :src="blog.cesta_obrazku" alt="Blog obrazok" class="w-full h-full object-cover hover:scale-110 transition ease-in">
        </div>
        <div class="flex justify-start items-center h-[10%]">
            <div class="flex justify-center items-center px-3 rounded-2xl font-bold text-lg transition ease-in" :class="bgFunction(blog.tag)">{{ blog.tag.toUpperCase() }}</div>
            <div class="ms-2 text-lg flex items-center justify-center hover:text-gray-400 transi ease-in">|<span class="text-lg ms-2">{{ whenUploaded(blog.date) }}</span></div>
        </div>
        <div class="h-[35%] w-full">
            <h1 class="mb-3 text-[2rem] font-bold hover:text-gray-400 transition ease-in">{{ blog.name }}</h1>
            <p class="hover:text-gray-400 transition ease-in">{{ truncatedBlogName(blog.description) }}</p>
        </div>
        <div class="h-[5%] w-full">
            <p class="text-[0.6rem] text-slate-400 flex pt-5">
              <ion-icon :icon="personCircle" class="text-gray-400 text-sm me-1" />{{ blog.autor }}
              <ion-icon :icon="time" class="text-gray-400 text-sm ms-4 me-1" /> {{ calculateReadingTime(blog.description) }} min. čítania
            </p>
        </div>
    </router-link>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { personCircle, time } from 'ionicons/icons';

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

    const whenUploaded = (date) =>{
      switch(date){
        case new Date():
          return 'DNES';
        case new Date().setDate(new Date().getDate() - 1):
          return 'VČERA';
        default:
          return date;
      }
    }

    const truncatedBlogName = (name) => {
        const words = name.split(' ');
      if(words.length > 20){
        return words.slice(0, 50).join(' ') + '...';
      }
      return words;
    }

    const calculateReadingTime = (description) => {
      const wordsPerMinute = 200; // You can adjust this value based on your needs
      const words = description.split(' ').length; // Split by whitespace and count the words
      const readingTimeMinutes = words / wordsPerMinute;
      const roundedReadingTime = Math.ceil(readingTimeMinutes);
      return roundedReadingTime;
    }
</script>
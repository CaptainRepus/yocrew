<template>
  <newestArticle />
  <h1 class="px-48 text-2xl font-bold mt-7 mb-3">Čítaj čo ťa zaujíma</h1>
  <div class="px-48 w-full h-auto flex gap-3 mb-5">
    <div
      v-for="tag in tags"
      :key="tag"
      @click="toggleTag(tag)"
      :class="['flex justify-center items-center py-1 px-3 rounded-2xl font-semibold text-[0.8rem] transition ease-in cursor-pointer', tagClasses(tag), isTagSelected(tag) ? 'opacity-100' : 'opacity-50']"
    >
      {{ tag }}
    </div>
  </div>
  <hr class="h-1 mb-8 bg-gray-500 border-0 mx-48 rounded-xl">
  <div class="w-full h-auto px-48 grid grid-cols-3 gap-2 mb-16">
    <router-link
      class="w-full h-auto"
      v-for="(blog, index) in filteredBlogs"
      :key="index"
      :to="{ name: 'Article', params: { slug: blog.slug } }"
    >
      <div class="h-1/2 w-full rounded-xl overflow-hidden">
        <img :src="blog.image_path" alt="image" class="w-full h-full object-cover transition ease-in hover:scale-105" />
      </div>
      <div class="h-1/2 w-full flex flex-col">
        <div class="flex mt-2 gap-3">
          <div
            class="flex justify-center items-center py-1 px-3 rounded-2xl font-bold text-xs transition ease-in"
            :class="bgFunction(blog.tag)"
          >
            {{ blog.tag.toUpperCase() }}
          </div>
          <div class="flex justify-center items-center py-1 px-3 rounded-2xl font-bold text-xs transition ease-in hover:bg-gray-200 hover:text-black">
            {{ whenUploaded(blog.date) }}
          </div>
        </div>
        <div class="mt-1">
          <h5 class="mb-1 mt-0 font-semibold tracking-tight text-white text-[1.2rem] hover:text-gray-400 transition ease-in">
            {{ blog.title }}
          </h5>
        </div>
        <div>
          <p class="mb-1 font-normal text-white text-sm hover:text-gray-400 transition ease-in">
            {{ truncatedBlogDescription(blog.content) }}
          </p>
        </div>
        <p class="text-[0.6rem] text-slate-400 flex flex-row justify-start items-center mt-5">
          <ion-icon :icon="personCircle" class="text-gray-400 text-sm me-1" />{{ blog.author }}
          <ion-icon :icon="time" class="text-gray-400 text-sm ms-4 me-1" /> {{ calculateReadingTime(blog.content) }} min. čítania
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { IonButton, IonIcon } from '@ionic/vue';
import newestArticle from './newestArticle.vue';
import { RouterLink } from 'vue-router';
import { personCircle, time } from 'ionicons/icons';

export default {
  components: {
    IonButton,
    newestArticle,
    RouterLink,
    IonIcon,
  },
  setup() {
    const blogStore = useBlogStore();
    const selectedTags = ref([]);
    const tags = ['TECH', 'CS2', 'SVET', 'LOL', 'BRAWL STARS', 'ESPORT'];

    const sortedBlog = computed(() => {
      return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    const filteredBlogs = computed(() => {
      if (selectedTags.value.length === 0) {
        return sortedBlog.value.slice(3);
      }
      return sortedBlog.value.slice(3).filter(blog => selectedTags.value.includes(blog.tag));
    });

    const toggleTag = (tag) => {
      if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter(t => t !== tag);
      } else {
        selectedTags.value.push(tag);
      }
    };

    const isTagSelected = (tag) => selectedTags.value.includes(tag);

    const tagClasses = (tag) => {
      switch (tag) {
        case 'CS2':
          return 'bg-yellow-600 text-white hover:scale-105';
        case 'Gaming':
          return 'bg-green-500 text-white hover:scale-105';
        case 'LOL':
          return 'bg-blue-500 text-white hover:scale-105';
        case 'ESPORT':
          return 'bg-purple-500 text-white hover:scale-105';
        case 'SVET':
          return 'bg-lime-500 text-white hover:scale-105';
        case 'BRAWL STARS':
          return 'bg-red-600 text-white hover:scale-105';
        default:
          return 'bg-red-500 text-white hover:scale-105';
      }
    };

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('sk-SK', options);
    };

    const whenUploaded = (date) => {
      const today = new Date();
      const givenDate = new Date(date);
      if (today.toDateString() === givenDate.toDateString()) {
        return 'DNES';
      } else if (new Date(today.setDate(today.getDate() - 1)).toDateString() === givenDate.toDateString()) {
        return 'VČERA';
      } else {
        return date;
      }
    };

    const calculateReadingTime = (description) => {
      if (!description) return ''; // Return an empty string if description is undefined
      const wordsPerMinute = 200; // You can adjust this value based on your needs
      const words = description.split(' ').length; // Split by whitespace and count the words
      const readingTimeMinutes = words / wordsPerMinute;
      const roundedReadingTime = Math.ceil(readingTimeMinutes);
      return roundedReadingTime;
    };

    const bgFunction = (color) => {
      switch (color) {
        case 'CS2':
          return 'bg-yellow-600 text-white';
        case 'Gaming':
          return 'bg-green-500 text-white';
        case 'LOL':
          return 'bg-blue-500 text-white';
        case 'ESPORT':
          return 'bg-purple-500 text-white';
        case 'SVET':
          return 'bg-lime-500 text-white';
        case 'BRAWL STARS':
          return 'bg-red-600 text-white';
        default:
          return 'bg-red-500 text-white';
      }
    };

    const truncatedBlogDescription = (description) => {
      if (!description) return ''; // Return an empty string if description is undefined
      const words = description.split(' ');
      if (words.length > 20) {
        return words.slice(0, 20).join(' ') + '...';
      }
      return description;
    };

    return {
      sortedBlog,
      filteredBlogs,
      tags,
      selectedTags,
      toggleTag,
      isTagSelected,
      formatDate,
      bgFunction,
      whenUploaded,
      truncatedBlogDescription,
      calculateReadingTime,
      personCircle,
      time,
      tagClasses,
    };
  },
  methods: {
    click() {
      this.$router.push('/clanky');
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) and (min-height: 768px) {
    :host {
        --width: 800px;
        --height: 500px;
    }
}
</style>

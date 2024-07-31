<template>
  <div class="h-full md:h-auto">
    <div>
      <div class="flex flex-col gap-4">
        <router-link
          :to="{ name: 'Article', params: { slug: blog.slug } }"
          v-for="(blog, index) in sortedBlog.slice(1, 6)"
          :key="index"
          class="rounded-lg shadow flex flex-col md:flex-row h-auto w-full md:w-[45vw]">
          <div class="w-full md:w-[30%] h-[200px] md:h-auto transition ease-in rounded-lg overflow-hidden">
            <img
              class="rounded-lg h-full w-full object-cover hover:scale-110 transition ease-in"
              :src="blog.image_path"
              alt="Blog Image"
            />
          </div>
          <div class="p-3 w-full md:w-[70%] flex flex-col justify-center items-start">
            <div class="mb-2 flex flex-col md:flex-row">
              <div class="flex justify-center items-center px-3 rounded-2xl font-bold text-xs transition ease-in" :class="bgFunction(blog.tag)">{{ blog.tag.toUpperCase() }}</div>
              <div class="mt-2 md:mt-0 md:ms-2 text-md flex items-center justify-center hover:text-gray-400 transition ease-in">|<span class="text-xs ms-2">{{ whenUploaded(blog.date) }}</span></div>
            </div>
            <div>
              <h5 class="mb-1 mt-0 font-semibold tracking-tight text-white text-[1.3rem] hover:text-gray-400 transition ease-in">{{ blog.title }}</h5>
            </div>
            <p class="mb-1 font-normal text-white text-sm hover:text-gray-400 transition ease-in" v-html="truncatedBlogDescription(blog.content)"></p>
            <p class="text-[0.6rem] text-slate-400 flex flex-row justify-center items-center">
              <ion-icon :icon="personCircle" class="text-gray-400 text-sm me-1" />{{ blog.author }}
              <ion-icon :icon="time" class="text-gray-400 text-sm ms-4 me-1" /> {{ calculateReadingTime(blog.content) }} min. čítania
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useBlogStore } from '@/store/useBlogStore.js';
import { IonButton, IonIcon } from '@ionic/vue';
import { personCircle, time } from 'ionicons/icons';

export default {
  components: {
    IonButton,
    IonIcon
  },
  setup() {
    const blogStore = useBlogStore();
    const sortedBlog = computed(() => {
      return [...blogStore.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    const bgFunction = (color) => {
      switch (color) {
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

    const whenUploaded = (date) => {
      const today = new Date();
      const givenDate = new Date(date);
      if (givenDate.toDateString() === today.toDateString()) {
        return 'DNES';
      } else if (givenDate.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString()) {
        return 'VČERA';
      } else {
        return date;
      }
    }

    function truncatedBlogName(name) {
      if (!name) return ''; // Return an empty string if description is undefined
      const words = name.split(' ');
      if (words.length > 6) {
        return words.slice(0, 15).join(' ') + '...';
      }
      return name;
    }

    function calculateReadingTime(description) {
      if (!description) return ''; // Return an empty string if description is undefined
      const wordsPerMinute = 200; // You can adjust this value based on your needs
      const words = description.split(' ').length; // Split by whitespace and count the words
      const readingTimeMinutes = words / wordsPerMinute;
      const roundedReadingTime = Math.ceil(readingTimeMinutes);
      return roundedReadingTime;
    }

    function truncatedBlogDescription(description) {
      if (!description) return ''; // Return an empty string if description is undefined
      const words = description.split(' ');
      if (words.length > 15) {
        return words.slice(0, 17).join(' ') + '...';
      }
      return description;
    }

    return {
      sortedBlog,
      bgFunction,
      truncatedBlogName,
      truncatedBlogDescription,
      personCircle,
      time,
      calculateReadingTime,
      whenUploaded
    };
  },
  methods: {
    click() {
      this.$router.push('/clanky');
    }
  },
  async created() {
    const blogStore = useBlogStore();
    try {
      await blogStore.getBlog();
    } catch (error) {
      console.error('Error fetching blog articles:', error);
    }
  }
};
</script>

<template>
    
    <div class="flex items-center justify-between bg-green-500 p-4 mb-4 rounded-xl md:rounded-none md:mb-0 ml-0 mr-0 md:ml-8 md:mr-4">
      <!-- Left arrow for scrolling -->
      <button @click="scroll(-1)" class="focus:outline-none">
        <!-- Replace with your left arrow icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
  
      <!-- Profile card -->
      <div class="flex flex-col items-center overflow-hidden  ">
        <img :src="currentPhoto.url" :alt="currentPhoto.name" class="w-5/6 shadow-lg aspect-square object-cover  rounded-full"/>
        <div class="w-full px-6 py-4 bg-black shadow-lg mt-4 rounded-2xl">
          <div class="font-bold text-xl mb-2 text-white">{{ currentPhoto.name }}</div>
          <p class="text-gray-300 text-base">{{ currentPhoto.position }}</p>
        </div>
      </div>
  
      <!-- Right arrow for scrolling -->
      <button @click="scroll(1)" class="focus:outline-none">
        <!-- Replace with your right arrow icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
</template>
  
  
  <script>
  export default {
  data() {
    return {
      currentIndex: 0,
      photos: [
        { url: '../../../public/img/background.jpg', name: 'idk1', position: 'Developer' },
        { url: '../../../public/img/profile.jpg', name: 'idk2', position: 'Designer' },
      ]
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex];
    }
  },
  methods: {
    scroll(direction) {
      this.currentIndex += direction;
      if (this.currentIndex < 0) {
        this.currentIndex = this.photos.length - 1;
      } else if (this.currentIndex >= this.photos.length) {
        this.currentIndex = 0;
      }
    }
  }
};
  </script>
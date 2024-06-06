<template>
  <section class="py-24 pt-5">
    <!-- VEDENIE -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-12">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-300">VEDENIE</h2>
    </div>
    <div class="grid grid-cols-1 min-[500px] md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        <!-- Members -->
        <div class="block group col-span-1" v-for="(index) in vedenie">
            <div class="relative mb-6">
                <img :src="index.url" alt="Antonio image"
                     class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-green-600" />
            </div>
            <h4 class="text-xl font-semibold text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-600">{{ index.name }}</h4>
            <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-200">{{ index.position }}</span>
        </div>
    </div>
</div>

      <!-- CONTENT & VIDEO ODDELENIE -->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
    <div class="mb-12">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-300">CONTENT & VIDEO ODDELENIE</h2>
    </div>
    <div class="grid grid-cols-1 min-[500px] md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        <!-- Members -->
        <div class="block group col-span-1" v-for="(index) in content">
            <div class="relative mb-6">
                <img :src="index.url" alt="Antonio image"
                     class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-green-600" />
            </div>
            <h4 class="text-xl font-semibold text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-600">{{ index.name }}</h4>
            <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-200">{{ index.position }}</span>
        </div>
    </div>
</div>

      <!-- ADMIN & OFFICE ODDELENIE -->
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
    <div class="mb-12">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-300">ADMIN & OFFICE ODDELENIE</h2>
    </div>
    <div class="grid grid-cols-1 min-[500px] md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        <!-- Members -->
        <div class="block group col-span-1" v-for="(index) in office">
            <div class="relative mb-6">
                <img :src="index.url" alt="Antonio image"
                     class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-green-600" />
            </div>
            <h4 class="text-xl font-semibold text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-600">{{ index.name }}</h4>
            <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-200">{{ index.position }}</span>
        </div>
    </div>
</div>

    <!-- Food &  Beverage -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
    <div class="mb-12">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-300">FOOD & BEVERAGE</h2>
    </div>
    <div class="grid grid-cols-1 min-[500px] md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        <!-- Members -->
        <div class="block group col-span-1" v-for="(index) in food">
            <div class="relative mb-6">
                <img :src="index.url" alt="admin image"
                     class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-green-600" />
            </div>
            <h4 class="text-xl font-semibold text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-600">{{ index.name }}</h4>
            <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-200">{{ index.position }}</span>
        </div>
    </div>
</div>

  <!-- STREAMERI -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
    <div class="mb-12">
        <h2 class="font-manrope text-5xl text-center font-bold text-gray-300">STREAMERI</h2>
    </div>
    <div class="grid grid-cols-1 min-[500px] md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
        <!-- Members -->
        <div class="block group col-span-1" v-for="(index) in streameri">
            <div class="relative mb-6">
                <img :src="index.url" alt="streamers image"
                     class="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-4 border-solid border-transparent group-hover:border-green-600" />
            </div>
            <h4 class="text-xl font-semibold text-gray-200 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-600">{{ index.name }}</h4>
            <span class="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-200">{{ index.position }}</span>
        </div>
    </div>
</div>
  </section>
</template>

  
  <script>
  export default {
  data() {
    return {
      content: [
        { url: '/img/members/Jan _J0hnis_ Štál.JPG', name: 'Jan "J0hnis" Štál', position: 'Caster' },
        { url: '/img/members/Štefánia _Lathy_ Kadlečíková.jpg', name: 'Štefánia "Lathy" Kadlečíková', position: 'Social Media Guru' },
        { url: '/img/members/Adam _MoJaVec_ Moravec.jpeg', name: 'Adam "MoJaVec" Moravec', position: 'Photo & Video Creator' },
        { url: '/img/members/Maroš _TadyMaroš_ Vorek.jpg', name: 'Maroš "TadyMaroš" Vorek', position: 'Photo & Video Creator' },
      ],
      streameri: [
        { url: '/img/streamers/chrimsie.png', name: 'Chrimsie', position: 'Streamerka' },
        { url: '/img/streamers/expansive.png', name: 'EXP4NSIVE', position: 'Streamer' },
        { url: '/img/streamers/JaroslavManTV2.png', name: 'JaroslavManTV', position: 'Streamer' },
        { url: '/img/streamers/Lathy.png', name: 'Lathy', position: 'Streamerka' },
        { url: '/img/streamers/marinecz.png', name: 'MarineCZ', position: 'Streamer' },
        { url: '/img/streamers/Volt.jpg', name: '2oldVolt', position: 'Streamer' },
        { url: '/img/streamers/mikajla.png', name: 'Mikajla', position: 'Streamerka' },
        { url: '/img/streamers/byxby.png', name: 'byXby', position: 'Streamer' },
        { url: '/img/streamers/danuskateyron.png', name: 'DanuskaTeyron', position: 'Streamer' },
        { url: '/img/streamers/lery478.png', name: 'Lery478', position: 'Streamer' },
      ],
      vedenie: [
        { url: '/img/members/Michal _Yodoch_ Fröhlich.jpeg', name: 'Michal "Yodoch" Fröhlich', position: 'CEO' },
        { url: '/img/profile.jpg', name: 'Kakadu', position: 'CEO representative' },
        { url: '/img/members/Ondra _Harasal_ Minčev.jpg', name: 'Ondra "Harasal" Minčev', position: 'Project Manager' },
        { url: '/img/members/Martin _Jafress_ Rada.jpg', name: 'Martin "Jafress" Rada', position: 'Project Manager' },
      ],
      office: [
        { url: '/img/members/Marek _Sasuk_ Horvát.jpg', name: 'Marek "Sasuk" Horvát', position: 'Web Admin' },
        { url: '/img/members/Patrik _Pípo_ Dian.jpeg', name: 'Patrik "Pípo" Dian', position: 'Web Admin' },
        { url: '/img/members/Romi _Yodoška_ Garaiová.jpg', name: 'Romi "Yodoška" Garaiová', position: 'Back office manager' },
      ],
      food: [
        { url: '/img/members/Marek _Seso_ Jurko.jpg', name: 'Marek "Seso" Jurko', position: 'Hydration specialist' },
        { url: '/img/members/Kristína _Chrimsie_ Štyriaková.jpg', name: 'Kristína "Chrimsie" Štyriaková', position: 'Food specialist' },
      ],
    };
  },
};
  </script>
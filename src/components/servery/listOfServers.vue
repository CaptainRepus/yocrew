<template>
    <div class="w-full md:px-3 mt-7 px-4">
        <h2 class="text-4xl md:px-56 font-bold mb-5">CS2 Servery</h2>
        <div class="w-full md:grid grid-cols-1 gap-5 md:px-56">
            <div v-for="(server, index) in serverStore.server" :key="index"
            class="bg-gray-100 border border-gray-200 rounded-xl w-full h-28 max-md:mb-4 flex hover:bg-gray-300 overflow-hidden max-md:flex max-md:flex-col max-md:h-60"
            @mouseenter="scaleImage"
            @mouseleave="resetImage">
                <div class="w-1/3 max-md:w-full max-md:h-1/3 h-full overflow-hidden">
                    <img src="/img/tournaments/cs2_2.jpg" class="w-full h-full object-cover transition ease-in" alt="">
                </div>
                <div class="w-1/2 md:w-1/3 h-full max-md:h-1/3 flex justify-center items-start ps-5 flex-col">
                    <h1 class="text-lg md:text-xl font-bold text-black">{{ server.name }}</h1>
                    <p class="text-black">Adresa: {{ server.link }}</p>
                </div>
                <!-- PC -->
                <div class="w-1/3 h-full flex justify-center items-center max-md:hidden">
                    <a :href="server.link" class="rounded-xl overflow-hidden w-1/3 h-1/2 flex justify-center items-center">
                        <div class="w-full h-full bg-green-600 flex justify-center items-center font-bold">
                            Pripojiť sa
                            <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >         
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                            </svg>
                        </div>  
                    </a>   
                </div>
                <!-- MOBIL -->
                <div class="w-1/2 h-1/3 flex justify-center items-center md:hidden">
                        <ion-button @click="alert">
                            Pripojiť sa
                            <svg
                            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >         
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                            </svg>
                        </ion-button>  
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { useServerStore } from '@/store/useServerStore';

const serverStore = useServerStore();

const alert = () => {
    alert('Na mobile sa nemôžeš pripojiť na CS2 server');
}

const scaleImage = (event) => {
  const image = event.currentTarget.querySelector('img');
  image.style.transform = 'scale(1.2)';
};

const resetImage = (event) => {
  const image = event.currentTarget.querySelector('img');
  image.style.transform = 'scale(1)';
};
</script>
<template>
    <div class="w-full md:px-3 mt-7">
        <div class="w-full md:grid grid-cols-2 gap-5">
            <div v-for="(server, index) in serverStore.server" :key="index"
            class="bg-gray-900 border border-gray-800 rounded-xl w-full h-28 max-md:mb-4 flex max-md:px-2 hover:bg-gray-800">
                <div class="w-2/3 h-full flex justify-center items-center">
                    <h1 class="text-lg md:text-2xl  font-bold text-center">{{ server.name }}</h1>
                </div>
                <!-- PC -->
                <div class="w-1/3 h-full flex justify-center items-center max-md:hidden">
                    <a :href="server.link">
                        <ion-button>
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
                    </a>   
                </div>
                <!-- MOBIL -->
                <div class="w-1/3 h-full flex justify-center items-center md:hidden">
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

<script>
import { IonButton } from '@ionic/vue';
import { useServerStore } from '@/store/useServerStore';

export default {
    components: {
        IonButton
    },
    setup() {
        const serverStore = useServerStore();
        return {
            serverStore,
        }
    },
    methods: {
        alert() {
            alert('Na mobile sa nemôžeš pripojiť na CS2 server');
        }
    }
}
</script>
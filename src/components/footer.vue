<template>
    <footer class="bg-gray-900 rounded-lg shadow m-4 max-md:hidden">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://yocrew.eu/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/img/yocrewlogo.png" class="h-16" alt="YoCrew Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YoCrew</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="https://instagram.com/yocrew_/" target="_blank">
                            <ion-icon class="text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl" :icon="logoInstagram" />
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://discord.gg/hnyAMZsQKU" target="_blank">
                            <ion-icon class="text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl" :icon="logoDiscord" />
                        </a>
                        
                    </li>
                    <li>
                        <a href="https://www.facebook.com/yooocrew/?_rdr" target="_blank">
                            <ion-icon class="text-gray-400 hover:underline me-4 md:me-6 hover:text-green-500 text-xl" :icon="logoFacebook" />
                        </a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-400 sm:text-center ">© {{ year }} <a href="https://yocrew.eu/" target="_blank" class="text-gray-400 hover:underline hover:text-green-500">YoCrew™</a>. Všetky práva sú vyhradené.</span>
            <sponsorBox class="mt-5" />
        </div>
    </footer>
</template>
<script setup>
import sponsorBox from './sponsorBox.vue';
import { IonIcon } from '@ionic/vue';
import { 
    logoInstagram,
    logoFacebook,
    logoDiscord,
} from 'ionicons/icons'
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>
<template>
    <div class="animate relative w-full h-auto md:h-auto bg-green-600 shadow-md border border-gray-700 rounded-lg md:rounded-none overlfow-x-hidden mt-[1rem] mb-5 oveflow-hidden">
        <span class="absolute top-[-2rem] left-[-1rem] text-5xl mt-2 mr-2 md:hidden">🎉</span>
        <span class="absolute bottom-[-1rem] right-[-2rem] text-5xl mt-2 mr-2 md:hidden">🎊</span>
        <div class="flex flex-col p-2 md:flex-row justify-center items-center">
            <div class="md:w-1/3">
                <h1 class="p-2 text-white text-xl text-center font-bold">
                {{ giveawayStore.giveaway.name }}
            </h1>
            <h2 class="p-1 text-white text-md text-center max-md:hidden">
                {{ giveawayStore.giveaway.popis }}
            </h2>
            </div>
             <div class="flex justify-center items-center md:w-1/4" >
                <button id="open-modal" class="p-3 text-white text-md text-center bg-green-500 border border-green-900 rounded-lg mt-2 md:mt-0 hover:bg-green-700 max-md:mb-3">
                    Prihlás sa do {{ giveawayStore.giveaway.deadline }}
                </button>
            </div>
        </div>
    </div>
    <giveawayModal />
</template>


<script>
import { useGiveawayStore } from '@/store/useGiveawayStore.js';
import giveawayModal from './giveawayModal.vue';

export default {
    components: {
        giveawayModal
    },
    setup() {
        const giveawayStore = useGiveawayStore();
        return {
            giveawayStore
        }
    }
};
</script>

<style scoped>
.animate{
    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% {
    background-color: 1;
  }
  50% {
    opacity: 1.8; 
  }
}
</style>
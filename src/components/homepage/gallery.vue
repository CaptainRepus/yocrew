<script>
    import team from './team.vue';
    export default {
        components: {
            team
        }
    }
</script>
<template>
    <h1 class="text-2xl font-bold mb-3 md:px-3 md:py-0">Spoznaj náš tím</h1>
    <div class="flex md:flex-row flex-col-reverse md:items-center">
        <div class="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:ms-3">
            <div class="grid gap-3">
                <div>
                    <img class="h-auto max-w-full rounded-lg  " src="/img/nugosu.webp.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/5v5_series.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/image-2.png" alt="">
                </div>
            </div>
            <div class="grid gap-3">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/image-3.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/image-4.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/image-5.png" alt="">
                </div>
            </div>
            <div class=" gap-3 md:grid hidden">
                <div>
                    <img class="h-auto max-w-full rounded-lg  " src="/img/5v5_winners.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/commentators.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/image-7.png" alt="">
                </div>
            </div>
            
            
        </div>
        <team class="w-full aspect-square md:w-1/2 p-20" />
    </div>
</template>
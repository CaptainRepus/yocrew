<script>
    import team from './team.vue';
    export default {
        components: {
            team
        }
    }
</script>
<template>
    <h1 class="text-2xl font-bold mb-3">Toto sme my</h1>
    <div class="flex md:flex-row flex-col-reverse md:items-center">
        <div class="md:w-1/2 w-full grid grid-cols-2 gap-3">
            <div class="grid gap-3">
                <div>
                    <img class="h-auto max-w-full rounded-lg ease-in-out hover: hover:border-2 " src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
                </div>
            </div>
            <div class="grid gap-3">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
                </div>
            </div>
            
            
        </div>
        <team class="w-full aspect-square md:w-1/2 p-20" />
    </div>
</template>
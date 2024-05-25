<template>
    <div class="h-52 md:h-80 bg-center bg-no-repeat md:bg-cover bg-green-700 bg-blend-multiply flex justify-center items-center max-md:rounded-xl max-md:border-[3px] max-md:border-green-600">
        <div class="mx-auto max-w-screen-xl text-center flex justify-center items-center flex-col">
            <h1 class="mb-2 md:mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{{ title }}</h1>
            <p class="px-2 mb-4 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">{{ description }}</p>
        </div>
    </div>
</template>
<script>
export default{
    props:[
        'title',
        'description',
        'image',
    ]
}
</script>
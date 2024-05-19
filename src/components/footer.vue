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
                        <a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">Články</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">Turnaje</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6 hover:text-green-500">CS2 Servery</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline hover:text-green-500">Kontakt</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-400 sm:text-center ">© {{ year }} <a href="https://yocrew.eu/" class="hover:underline hover:text-green-500">YoCrew™</a>. Všetky práva sú vyhradené.</span>
        </div>
    </footer>
</template>
<script>
export default{
    data(){
        return{
            year: new Date().getFullYear()
        }
    }
}
</script>
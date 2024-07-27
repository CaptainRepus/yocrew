<template>
    <section class="flex justify-center items-center h-[60vh] md:h-[85vh] bg-center bg-no-repeat bg-cover bg-[url('/img/IMG_0050.png')] bg-gray-500 bg-blend-multiply">
        <div class="max-w-screen-xl text-center ">
            <h1 data-aos="fade-up" class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">"Spájame hráčov, tvoríme šampiónov!"</h1>
            <p data-aos="fade-up" class="mb-8 text-sm px-3 font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">"V našej ešportovej organizácii spájame vášeň, technológie a tímovú prácu, aby sme dosiahli vrcholový úspech a inšpirovali novú generáciu hráčov."</p>
            <div class="flex gap-3 justify-center items-center sm:flex-row sm:justify-center">
                <router-link to="/turnaje-servery" class="inline-flex justify-center items-center h-8 w-1/3 md:h-auto md:w-auto md:px-5 md:py-2 text-base font-bold text-center text-white rounded-lg bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-900 transition ease-in">
                    Turnaje
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </router-link>
                <router-link to="/yocrew" class="flex justify-center items-center h-8 w-1/3 md:h-auto md:w-auto md:px-5 md:py-2 text-base font-bold text-center text-white rounded-lg bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-900 transition ease-in">
                    Náš tím
                </router-link>  
            </div>
        </div>
    </section>
</template>
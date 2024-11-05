<template>
    <main>
        <section>
            <div class="relative px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
                <div class="text-left sm:text-center">
                    <p class="text-4xl font-semibold font-display text-blue-950 sm:text-9xl">
                        Oops! Error. <span class="lg:block">Page Not Found.</span>
                    </p>
                    <p class="max-w-md mx-auto mt-4 text-slate-500">
                        The page you're looking for might have been moved, deleted, or never
                        existed in the first place. Please return to the homepage.
                    </p>
                    <div class="flex flex-col max-w-xl mx-auto justify-center gap-2 mt-6 sm:flex-row relative">
                        <NuxtLink to="/" class="items-center inline-flex w-full focus:outline-disc bg-green-500 duration-500 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 font-medium lg:w-auto h-12 hover:bg-green-600 justify-center px-6 py-1 rounded-full text-white text-center text-sm">
                            HomePage
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup></script>

<style scoped></style>

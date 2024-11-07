<template>
    <section class="w-full sticky top-0 bg-white z-10 md:overflow-hidden">
        <div class="relative w-full mx-auto 2xl:max-w-7xl">
            <div
                class="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32 max-w-7xl">
                <nav class="w-full relative">
                    <div class="flex flex-wrap items-center justify-between mx-auto relative">
                        <a href="https://tabzen.app/" class="inline-flex items-center text-blue-950">
                            <span>
                                <img src="/logo/small.svg" alt="TabZen Logo">
                            </span>
                            <span class="text-3xl font-display"> &nbsp;TabZen</span>
                        </a>
                        <button ref="burgerButton" @click="toggleMobileMenu" aria-label="Toggle Menu"
                            class="inline-flex items-center justify-center p-2 pr-0 text-blue-950 hover:text-blue-500 focus:outline-none focus:text-blue-500 md:hidden">
                            <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{ hidden: mobileMenu, 'inline-flex': !mobileMenu }" class="inline-flex"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                                <path :class="{ hidden: !mobileMenu, 'inline-flex': mobileMenu }" class="inline-flex"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div ref="target" class="md:block md:w-auto relative" :class="mobileMenu ? 'w-full' : 'hidden'">
                            <ul
                                class="font-medium flex flex-col md:items-center p-4 md:p-0 mt-2 absolute w-full md:relative z-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                                <li @click="mobileMenu = false" v-for="(link, index) in navLinks" :key="link.id"
                                    class="md:mb-0"
                                    :class="{ 'mb-1': index !== navLinks.length - 1, 'mb-0': index === navLinks.length - 1 }">
                                    <NuxtLink to="/" :aria-label="link.ariaLabel"
                                        class="block py-2 px-3 sm:mt-0 hover:bg-blue-500 text-blue-950 hover:text-white md:text-slate-600 md:hover:text-blue-500 rounded md:hover:bg-transparent md:border-0 md:p-0">
                                        {{ link.text }}
                                    </NuxtLink>
                                </li>
                                <li class="hidden md:flex">
                                    <NuxtLink to="/" aria-label="Add to Firefox"
                                        class="items-center inline-flex w-full focus:outline-disc bg-blue-50 duration-200 focus:ring-2 focus:ring-blue-60 focus:ring-offset-2 font-medium md:w-auto h-12 hover:bg-blue-100 gap-3 justify-center px-6 py-1 rounded-full text-blue-600 text-center text-sm">
                                        Add to Chrome
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
    <main>
        <section>
            <div class="relative px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
                <div class="text-left sm:text-center">
                    <p class="text-4xl font-semibold font-display text-blue-950 sm:text-9xl">
                        Oops! Page Not Found.
                    </p>
                    <p class="max-w-md mx-auto mt-4 text-slate-500">
                        The page you're looking for might have been moved, deleted, or never
                        existed in the first place! Please return to the homepage.
                    </p>
                    <div class="flex flex-col max-w-xl mx-auto justify-center gap-2 mt-6 sm:flex-row relative">
                        <NuxtLink to="/"
                            class="items-center inline-flex w-full focus:outline-disc bg-blue-500 duration-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-medium lg:w-auto h-12 hover:bg-blue-600 justify-center px-6 py-1 rounded-full text-white text-center text-sm">
                            Home Page
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="overflow-hidden relative mt-24">
        <div class="px-8 md:px-12 lg:px-24 max-w-7xl mx-auto ">
            <div class="gap-8 flex flex-col md:flex-row md:items-center md:justify-between	">
                <a aria-label="TabZen" href="https://tabzen.app/"
                    class="inline-flex items-center text-blue-950 font-display">
                    <span>
                        <img src="/logo/large.svg" alt="tabzen logo" />
                    </span>
                    <span class="text-4xl md:text-5xl font-bold">&nbsp;TabZen</span>
                </a>
                <div class="lg:col-span-full lg:ml-auto">
                    <ul role="list" class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4 lg:gap-6 w-fit">
                        <li v-for="link in navLinks" :key="link.id">
                            <NuxtLink :to="`/`" :aria-label="link.ariaLabel"
                                class="text-sm uppercase font-medium text-slate-500 hover:text-blue-500"> {{
                                    link.text }}
                            </NuxtLink>
                        </li>
                        <li><a href="mailto:jmandevs@gmail.com" aria-label="Contact"
                                class="text-sm uppercase font-medium text-slate-500 hover:text-blue-500">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-0 md:mt-8 py-8 md:flex md:items-center md:justify-between">
                <div class="flex space-x-3 md:order-2">
                    <a aria-label="tabzen twitter" href="#"
                        class="text-blue-500 hover:text-blue-600 bg-blue-50 rounded-full h-8 w-8 inline-flex items-center justify-center">
                        <span class="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler w-4 h-4 icon-tabler-brand-twitter-filled" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </a>
                    <a aria-label="tabzen github" href="#"
                        class="text-blue-500 hover:text-blue-600 bg-blue-50 rounded-full h-8 w-8 inline-flex items-center justify-center">
                        <span class="sr-only">GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler w-4 h-4 icon-tabler-brand-github-filled" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                                stroke-width="0" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div x-data="{ currentYear: new Date().getFullYear() }">
                    <p class="mt-8 text-xs leading-5 text-slate-500 md:order-1 md:mt-0">
                        © <span x-text="currentYear">{{ new Date().getFullYear() }}</span> <a
                            href="https://tabzen.app/">TabZen</a>. All rights reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenu = ref(false);

const toggleMobileMenu = () => {
    mobileMenu.value = !mobileMenu.value;
};

const navLinks = [
    { id: 1, text: 'About', href: '#about', ariaLabel: 'About', title: 'About' },
    { id: 2, text: 'FAQ', href: '#faq', ariaLabel: 'FAQ', title: 'FAQ' },
    { id: 3, text: 'Reviews', href: '#reviews', ariaLabel: 'Reviews', title: 'Reviews' },
    { id: 4, text: 'Download', href: '#download', ariaLabel: 'Download', title: 'Download' },
];

definePageMeta({
    layout: '404',
});
</script>

<style scoped></style>

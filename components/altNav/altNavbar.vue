<template>
  <section class="w-full sticky top-0 bg-white z-10 md:overflow-hidden">
    <div class="relative w-full mx-auto 2xl:max-w-7xl">
      <div
        class="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32 max-w-7xl">
        <nav class="w-full relative">
          <div class="flex flex-wrap items-center justify-between mx-auto relative">
            <a href="https://tabzen.app/" class="inline-flex items-center text-blue-950">
              <span>
                <img src="../../public/logo/small.svg" alt="TabZen Logo">
              </span>
              <span class="text-3xl font-display "> &nbsp;TabZen</span>
            </a>
            <button @click="toggleMobileMenu" aria-label="Toggle Menu"
              class="inline-flex items-center justify-center p-2 text-blue-950 hover:text-blue-400 focus:outline-none focus:text-blue-950 md:hidden">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{ hidden: mobileMenu, 'inline-flex': !mobileMenu }" class="inline-flex'"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path :class="{ hidden: !mobileMenu, 'inline-flex': mobileMenu }" class="inline-flex"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div class="md:block md:w-auto relative" :class="mobileMenu ? 'w-full' : 'hidden'">
              <ul
                class="font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 absolute w-full md:relative z-10 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                <li @click="mobileMenu = false" v-for="link in navLinks" :key="link.id" class="mb-1 md:mb-0">
                  <NuxtLink to="/" :aria-label="link.ariaLabel"
                    class="block py-2 px-3 mt-1 sm:mt-0 text-slate-600 hover:text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                    {{ link.text }}
                  </NuxtLink>
                </li>
                <li class="hidden md:flex">
                  <a aria-label="Add to Firefox" href="#"
                    class="items-center inline-flex w-full focus:outline-disc bg-green-50 duration-200 focus:ring-2 focus:ring-green-60 focus:ring-offset-2 font-medium md:w-auto h-12 hover:bg-green-100 gap-3 justify-center px-6 py-1 rounded-full text-green-600 text-center text-sm">
                    Add to Chrome
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();

const mobileMenu = ref(false);

const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

const navLinks = [
  { id: 1, text: 'About', href: '#about', ariaLabel: 'About', title: 'About' },
  { id: 2, text: 'FAQ', href: '#faq', ariaLabel: 'FAQ', title: 'FAQ' },
  { id: 3, text: 'Reviews', href: '#reviews', ariaLabel: 'Reviews', title: 'Reviews' },
  { id: 4, text: 'Download', href: '#download', ariaLabel: 'Download', title: 'Download' },
]

watch(() => route.fullPath, () => {
    window.history.replaceState(null, document.title, window.location.pathname);
});


</script>


<style scoped></style>

<template>
  <section class="w-full overflow-hidden relative">
    <div class="relative w-full mx-auto 2xl:max-w-7xl">
      <div
        class="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row md:px-12 lg:px-32 max-w-7xl">


        <nav class="w-full">
          <div class="flex flex-wrap items-center justify-between mx-auto">
            <a href="/" class="inline-flex items-center">
              <span>
                <img src="../../public/logo/small.svg" alt="">
              </span>
              <span class="text-3xl font-display "> &nbsp;TabZen</span>
            </a>
            <button @click="toggleMobileMenu" aria-label="Toggle Menu"
              class="inline-flex items-center justify-center p-2 text-blue-950 hover:text-blue-400 focus:outline-none focus:text-blue-950 md:hidden">
              <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16">
                </path>
                <path class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>

            <div class="md:block md:w-auto" :class="mobileMenu ? 'w-full' : 'hidden'">
              <ul class="font-sm flex flex-col md:flex-row md:gap-6 border md:border-none">
                <li v-for="link in navLinks" :key="link.id" class="mb-1 md:mb-0">
                  <a @click.prevent="smoothScroll(link.href)" :aria-label="link.ariaLabel" :href="link.href"
                    class="text-slate-600">
                    {{ link.text }}
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
]

const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>

<style scoped></style>

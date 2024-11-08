<template>
  <footer class="overflow-hidden relative mt-24">
    <div class="px-8 md:px-12 lg:px-32 max-w-7xl 2xl:max-w-7xl mx-auto">
      <div class="gap-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <a aria-label="TabZen" href="https://tabzen.app/" class="inline-flex items-center text-blue-950 font-display">
          <img src="../../public/logo/logo.svg" class="h-[40px] md:h-[50px]" alt="tabzen logo" />
        </a>
        <div class="lg:col-span-full lg:ml-auto">
          <ul role="list" class="flex flex-col gap-1 md:flex-row md:items-center md:gap-4 lg:gap-6 w-fit">
            <li v-for="link in navLinks" :key="link.id">
              <a @click.prevent="smoothScroll(link.href)" :aria-label="link.ariaLabel" :href="link.href"
                class="text-sm uppercase font-medium text-slate-500 hover:text-blue-500"> {{link.text }}
              </a>
            </li>
            <li><a href="mailto:jmandevs@gmail.com" aria-label="Contact"class="text-sm uppercase font-medium text-slate-500 hover:text-blue-500">Contact</a></li>
            <li><button @click="toggleModal"class="text-sm uppercase font-medium text-slate-500 hover:text-blue-500">TOS</button></li>
          </ul>
        </div>
      </div>
      <div class="mt-0 md:mt-8 py-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-3 md:order-2">
          <a aria-label="tabzen twitter" href="#"
            class="text-blue-500 hover:text-blue-600 bg-blue-50 rounded-full h-8 w-8 inline-flex items-center justify-center">
            <span class="sr-only">Twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-4 h-4 icon-tabler-brand-twitter-filled"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                stroke-width="0" fill="currentColor"></path>
            </svg>
          </a>
          <a aria-label="tabzen github" href="https://github.com/jackmayhew/tabzen-extension" target="_blank" rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600 bg-blue-50 rounded-full h-8 w-8 inline-flex items-center justify-center">
            <span class="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-4 h-4 icon-tabler-brand-github-filled"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
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
            © <span x-text="currentYear">{{ new Date().getFullYear() }}</span> 
            <a href="https://tabzen.app/" class="hover:text-blue-500"> TabZen</a>.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  <div v-if="isModalOpen" tabindex="-1"
    class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-dvh flex overflow-y-auto overflow-x-hidden">
    <div @click.stop ref="modalWrapper" class="relative p-4 w-full max-w-2xl">
      <div class="relative bg-gray-50 border border-gray-200 rounded-lg shadow max-h-[75vh] overflow-y-auto">
        <div class="flex items-center justify-between py-4 mx-4 mb-4 md:p-5 border-b rounded-t border-blue-900">
          <h3 class="text-2xl font-semibold text-blue-950">Terms of Service</h3>
          <button @click="toggleModal" type="button"
            class="text-gray-400 bg-transparent  hover:text-blue-950 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-end items-center ">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div v-for="item in tos" :key="item.id" class="py-4 px-6">
          <div class="text-base leading-relaxed text-slate-600">
            <h2 class="text-xl text-blue-950 font-bold">{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch } from "vue";
import { onClickOutside } from '@vueuse/core'

const isModalOpen = ref(false)
const modalWrapper = ref(null)

const navLinks = [
  { id: 1, text: 'About', href: '#about', ariaLabel: 'About', title: 'About', },
  { id: 2, text: 'FAQ', href: '#faq', ariaLabel: 'FAQ', title: 'FAQ', },
  { id: 3, text: 'Reviews', href: '#reviews', ariaLabel: 'Reviews', title: 'Reviews', },
]

const tos = [
  { id: 1, title: 'Introduction', text: 'This Terms of Service agreement ("Agreement") governs your use of the TabZen browser extension ("the Extension"). By installing and using the Extension, you agree to be bound by the terms and conditions of this Agreement.', },
  { id: 2, title: 'Scope of the Extension', text: 'The Extension is designed to block in-house advertisements from certain websites, including but not limited to Songsterr and Ultimate Guitar. The Extension does not interact with or modify any content on those websites other than removing in-house advertisements. While the Extension aims to block ads, it cannot guarantee that all ads will be blocked, as website changes may affect functionality. The Extension is not affiliated with any of the websites it interacts with.', },
  { id: 3, title: 'Limitations and Disclaimers', text: 'The Extension is provided "as is" without warranty of any kind, either express or implied. We do not guarantee that the Extension will be error-free, will perform as expected in all browser configurations, or will work indefinitely on all websites. You use the Extension at your own risk. We are not responsible for any damage or disruption caused by using the Extension, including but not limited to browser crashes, data loss, or conflicts with other extensions.', },
  { id: 4, title: 'No Data Collection', text: 'We do not collect any personal data or browsing information through the TabZen browser extension. The Extension operates solely to block in-house advertisements on supported websites and does not track, store, or transmit any user information.', },
  { id: 5, title: 'Intellectual Property', text: 'The Extension, including its code, design, and documentation, is the property of TabZen. You may not modify, distribute, or create derivative works of the Extension without prior written permission. We reserve the right to update or discontinue the Extension at any time.', },
  { id: 6, title: 'Termination', text: 'We reserve the right to terminate or suspend your access to the Extension at any time, for any reason, including if we reasonably believe you have violated this Agreement or engaged in behavior that disrupts the function of the Extension.', },
  { id: 7, title: 'Governing Law', text: 'This Agreement shall be governed by and construed in accordance with the laws of the Province of Québec, Canada, without giving effect to any choice or conflict of law provision. Any legal actions or disputes related to this Agreement will be resolved exclusively in the jurisdiction of Québec.', },
]

const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    const rect = element.getBoundingClientRect();
    const offset = 75;
    window.scrollTo({
      top: window.scrollY + rect.top - offset,
      behavior: 'smooth',
    });
  }
}

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

onClickOutside(modalWrapper, () => isModalOpen.value = false)

watch(isModalOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }
});
</script>

<style scoped></style>
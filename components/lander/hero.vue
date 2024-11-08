<template>
  <section>
    <div class="relative flex flex-col px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:pb-24 lg:pt-12 border min-h-screen">
      <div class="text-center">
        <h1 class="gsap-title text-5xl font-semibold font-display text-balance text-blue-950 sm:text-7xl opacity-0">Take Back Your Tabs!</h1>
        <p class="gsap-p mt-4 text-slate-600 text-base max-w-2xl mx-auto opacity-0">
          TabZen is a browser extension that removes disruptive ads and visual clutter from your guitar, bass, and drum
          tabs & chords.
        </p>
        <div class="gsap-btns mt-6 flex flex-col lg:flex-row lg:items-center w-full opacity-0">
          <div class="relative flex flex-col justify-center gap-2 md:flex-row xs:w-1/2 xs:mx-auto md:w-full">
            <a aria-label="Add to Chrome" href="#"
              class="items-center inline-flex w-full hover:-translate-y-1 focus:outline-disc bg-blue-500 duration-200 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-medium md:w-auto h-12 hover:bg-blue-600 justify-center px-6 py-1 rounded-full text-white text-center text-sm">
              Add to Chrome
            </a>
            <a aria-label="Add to Firefox" href="#"
              class="items-center inline-flex w-full hover:-translate-y-1 focus:outline-disc bg-blue-50 duration-200 focus:ring-2 focus:ring-blue-60 focus:ring-offset-2 font-medium md:w-auto h-12 hover:bg-blue-100 gap-3 justify-center px-6 py-1 rounded-full text-blue-600 text-center text-sm">
              Add to Firefox
            </a>
          </div>
        </div>
      </div>
      <div class="grid mt-12 mb-6 sm:mb-16 lg:mb-0 lg:mt-6 lg:grid-cols-2 hero-images">
        <img src="/images/hero1.png" class="gsap-img rounded-3xl rotate-6 w-full opacity-0" alt="bass tab before tabzen" />
        <img src="/images/hero2.png" class="gsap-img rounded-3xl -rotate-12 w-full opacity-0" alt="bass tab after tabzen" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  const context = gsap.context(() => {
    gsap.fromTo(".gsap-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(".gsap-p",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(".gsap-btns",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(".gsap-img",
      { y: 75, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.2, delay: 0.6, duration: 0.5, ease: "power2.out" }
    );
  });
  return () => context.revert();
});
</script>

<style scoped>
.gsap-title,
.gsap-p,
.gsap-btns {
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);

}

.gsap-img {
  will-change: transform, opacity;
}
</style>

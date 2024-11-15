<template>
    <div class="selection:bg-blue-500 selection:text-white bg-white flex flex-col min-h-svh">
        <Navbar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import { setupHead } from '~/composables/useHead.js';

setupHead("TabZen - Focused Tab Viewing")

useSeoMeta({
  title: 'TabZen - Focused Tab Viewing',
  ogTitle: 'TabZen - Focused Tab Viewinge',
  description: 'Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs.',
  ogDescription: 'Your tabs, distraction-free. TabZen blocks intrusive ads, giving you a cleaner view of your guitar, bass, and drum tabs.',
  ogImage: 'https://tabzen.app/images/og.png',
  twitterCard: 'summary_large_image',
})

</script>

<style scoped></style>
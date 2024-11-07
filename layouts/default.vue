<template>
    <div class="selection:bg-blue-400 selection:text-white bg-white flex flex-col min-h-svh">
        <Navbar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import { setupHead } from '../components/meta/headConfig.js'

setupHead("TabZen - Hide Overlays on Your Favourite Tab Sites")
</script>

<style scoped></style>
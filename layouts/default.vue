<template>
    <div class="selection:bg-blue-500 selection:text-white bg-white flex flex-col min-h-svh">
        <Navbar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import { setupHead } from '../components/meta/headConfig.js'

setupHead("TabZen - Focused Tab Viewing")
</script>

<style scoped></style>
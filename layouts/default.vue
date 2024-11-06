<template>
    <div class="selection:bg-green-400 selection:text-white bg-white flex flex-col min-h-svh">
        <Navbar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
import { setupHead } from '../components/meta/headConfig.js'

setupHead()
</script>

<style scoped></style>
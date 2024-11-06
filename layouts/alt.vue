<template>
    <div class="selection:bg-green-400 selection:text-white bg-white flex flex-col min-h-svh">
        <AltNavbar />
        <NuxtPage />
        <AltFooter />
    </div>
</template>

<script setup>
import { setupHead } from '../components/meta/headConfig.js'

setupHead("TabZen - Terms of Service")
</script>

<style scoped></style>
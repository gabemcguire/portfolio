<template>
  <footer class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8">
    <br>
    <p>© {{ currentYear }} Gabe McGuire. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

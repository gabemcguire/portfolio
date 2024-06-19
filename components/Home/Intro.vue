<template>
  <div class="space-y-6">
    <NuxtImg src="https://media.licdn.com/dms/image/D5603AQFYeoKMS3JzHQ/profile-displayphoto-shrink_400_400/0/1702611912391?e=1723680000&v=beta&t=1yvlSK9j0Jwf9mLufA9uxeeDIDk52d5gBxVCF6wdKXI" alt="Gabe McGuire"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-24 sm:w-24"
      sizes="64px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Hello!
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Hi, I'm Gabe McGuire, a computer science student and part-time developer for the State of Michigan. I thrive in all areas of software development, from front-end work with Vue.js or React to backend development using various languages and frameworks.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
       In my free time I love to dive into my own projects, always eager to learn and experiment with new technologies.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Gabe McGuire",
  description: "My name is Gabe McGuire. I'm a computer science student with a diverse skillset."
});
</script>

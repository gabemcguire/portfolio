<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Here are some of my most recent favorite videos and websites.";
useSeoMeta({
  title: "Bookmarks | Gabe McGuire",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Excalidraw",
    url: "https://excalidraw.com/",
  },
  //{
  ////  id: 3,
   // label: "NvChad - Neovim config",
//    url: "https://nvchad.com",
 // },
  {
    id: 2,
    label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
  },
  {
    id: 3,
    label: "Code With Stein - Django Playlist",
    url: "https://www.youtube.com/watch?v=i9ybOwG_XIs&list=PLpyspNLjzwBmE3ELWPYYK1Y6xKntu_vun",
  },
  {
    id: 4,
    label: "PrimeVue Component Library",
    url: "https://primevue.com",
  },
  {
    id: 5,
    label: "diawi",
    url: "https://www.diawi.com/",
  },
  {
    id: 6,
    label: "Ignite Boilerplate for React Native",
    url: "https://github.com/infinitered/ignite",
  },
  {
    id: 7,
    label: "React Native Vector Icons Directory",
    url: "https://oblador.github.io/react-native-vector-icons/",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>

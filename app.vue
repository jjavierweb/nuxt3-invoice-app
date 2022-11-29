<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle
      ? `${pageTitle} | Nuxt 3 Invoice APP`
      : "Nuxt 3 Invoice APP";
  },
});
</script>

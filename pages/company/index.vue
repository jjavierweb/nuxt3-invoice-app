<template>
  <Title>My Company</Title>
  <div>Company Data</div>
  {{ companies }}
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const { data: companies, error } = await useFetch("/api/company");
</script>

<style scoped></style>

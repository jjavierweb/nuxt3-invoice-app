<template>
  <Title>My Company</Title>
  <ErrorMessage v-if="error" :errorMsg="error.message" />
  <div>Company Data</div>
  <UtilsLoading v-if="isPending" />
  <div v-if="!isPending">{{ companies }}</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const isPending = ref<boolean>(true);

const { data: companies, error } = await useLazyFetch("/api/company");

isPending.value = false;
</script>

<style scoped></style>

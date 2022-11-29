<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      v-if="errorMsg"
      class="'p-2 mb-3 rounded-md block w-full text-center"
      :class="
        errorClass
          ? 'bg-green-600 text-green-100'
          : 'bg-rose-600 my-1 text-rose-100'
      "
    >
      <p class="p-2 text-lg">{{ errorMsg }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps(["errorMsg", "errorClass"]);
</script>

<style scoped></style>

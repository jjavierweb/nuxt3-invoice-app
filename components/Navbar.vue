<template>
  <header
    class="bg-raising-black-900 border-b-2 border-b-raising-black-600 p-4"
  >
    <nav class="container flex mx-auto items-center align-middle">
      <h2 class="text-xl">
        <NuxtLink to="/">Nuxt3 Invoice APP</NuxtLink>
      </h2>
      <div class="flex ml-auto">
        <ul
          class="flex justify-evenly"
          v-for="(item, index) in navLinks"
          :key="index"
        >
          <li
            class="p-2 mr-2 hover:bg-opacity-60 hover:bg-raising-black-600 hover:rounded-md text-zinc-400 hover:cursor-pointer"
          >
            <NuxtLink :to="item.link" activeClass="text-zinc-200">{{
              item.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex ml-auto" v-if="isLoggedIn()">
        <button @click="handleSignout">Sign Out</button>
      </div>
      <div class="flex ml-auto" v-else>
        <ul class="flex gap-2">
          <li
            class="p-2 rounded-md text-cadet-grey-100 hover:bg-prussian-blue-400 hover:cursor-pointer hover:shadow-md hover:text-cadet-gray-700"
          >
            <NuxtLink to="/signin" activeClass="">Sign In</NuxtLink>
          </li>
          <li
            class="p-2 bg-prussian-blue-200 rounded-md text-cadet-grey-100 hover:bg-prussian-blue-400 hover:cursor-pointer hover:shadow-md hover:text-cadet-gray-700"
          >
            <NuxtLink to="signup" activeClass=" ">Sign Up</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// get user
const user = useSupabaseUser();

const { isLoggedIn } = useAuth();

// get superbase auth
const { errorMsg, signOut } = useAuth();

const navLinks = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/company", name: "My Company" },
];

const handleSignout = async () => {
  await signOut();
  if (!errorMsg.value) {
    return navigateTo("/signin");
  }
};
</script>

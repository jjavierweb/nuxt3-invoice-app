<template>
  <!-- Set the page title on the browser tab -->
  <Title>Sign In</Title>

  <!-- main content here for the sing in -->
  <div class="w-full py-10 px-2 max-w-[850px] my-0 mx-auto sm:pt-[72px]">
    <div class="flex flex-col mt-40 items-center">
      <!-- Form Name -->
      <div>
        <h1 class="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign In
        </h1>
        <p class="mt-2 text-center text-lg">
          <span class="inline-block">
            Don't have an account yet?
            <NuxtLink
              to="/signup"
              class="text-aero-blue-400 hover:underline hover:text-aero-blue-700"
              >Sign Up</NuxtLink
            >
          </span>
        </p>
      </div>
      <form
        @submit.prevent="handleSignIn"
        method="post"
        class="flex flex-col gap-4 w-full space-y-6 mt-4"
      >
        <ErrorMessage :errorClass="errorSuccess" :errorMsg="errorMsg" />

        <div class="space-y-8 rounded-md shadow-sm">
          <div class="relative">
            <input
              v-model="email"
              type="email"
              name="email"
              required
              id="email"
              placeholder="Email Address"
              class="block appearance-none w-full bg-transparent border-b border-x-0 border-t-0 focus:ring-0 focus:border-b-prussian-blue-600 placeholder-transparent peer"
            />
            <label
              for="email"
              class="absolute left-0 ml-3 -top-3 text-zinc-200 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-200 peer-focus:text-sm"
              >Email Address</label
            >
          </div>
          <div class="relative">
            <input
              v-model="password"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              class="relative block appearance-none w-full bg-transparent border-b border-x-0 border-t-0 focus:ring-0 focus:border-b-prussian-blue-600 placeholder-transparent peer"
            />
            <label
              for="password"
              class="absolute left-0 ml-3 -top-3 text-zinc-200 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-200 peer-focus:text-sm"
              >Password</label
            >
          </div>

          <button
            type="submit"
            class="group relative flex text-center items-center justify-center w-full bg-prussian-blue-600 hover:bg-prussian-blue-800 text-zinc-300 hover:text-zinc-200 rounded-md py-2 px-4 font-medium"
          >
            <span class="absolute insert-y-0 left-0 flex items-center pl-3"
              ><LockClosedIcon
                class="h-5 w-5 text-zinc-500 text-opacity-90 group-hover:text-zinc-300"
                aria-hidden="true"
            /></span>
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LockClosedIcon } from "@heroicons/vue/24/solid";

// set data reference to bind to the form
const email = ref<string>("");
const password = ref<string>("");
const errorSuccess = ref<boolean>(true);

const router = useRouter();

const { errorMsg, signIn } = useAuth();

const handleSignIn = async () => {
  await signIn(email.value, password.value);
  if (!errorMsg.value) {
    return navigateTo("/");
  }
  errorSuccess.value = false;
  setTimeout(() => {
    errorMsg.value = "";
    errorSuccess.value = false;
  }, 3000);
  // reset form and focus the email
  email.value = "";
  password.value = "";
  // focus the email again
  document.getElementById("email")?.focus();
};
</script>

<style scoped></style>

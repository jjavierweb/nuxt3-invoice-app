<template>
  <!-- Set the page title on the browser tab -->
  <Title>Sign Up</Title>

  <!-- main content here for the sing in -->
  <div class="w-full py-10 px-2 max-w-[850px] my-0 mx-auto sm:pt-[72px]">
    <div class="flex flex-col mt-40 items-center">
      <!-- Form Name -->
      <div>
        <h1 class="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign Up
        </h1>
        <p class="mt-2 text-center text-lg">
          <span class="inline-block">
            Already have an account?
            <NuxtLink
              to="/signin"
              class="text-aero-blue-400 hover:underline hover:text-aero-blue-700"
              >Sign In</NuxtLink
            >
          </span>
        </p>
      </div>
      <form
        @submit.prevent="handleSignup"
        method="post"
        class="flex flex-col gap-4 w-full space-y-6 mt-4"
      >
        <ErrorMessage :errorMsg="errorMsg" :errorClass="errorSuccess" />
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
          <div class="relative">
            <input
              v-model="confirmPassword"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm Password"
              class="relative block appearance-none w-full bg-transparent border-b border-x-0 border-t-0 focus:ring-0 focus:border-b-prussian-blue-600 placeholder-transparent peer"
            />
            <label
              for="confirmPassword"
              class="absolute left-0 ml-3 -top-3 text-zinc-200 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-zinc-200 peer-focus:text-sm"
              >Confirm Password</label
            >
          </div>

          <button
            type="submit"
            class="group relative flex text-center items-center justify-center w-full bg-prussian-blue-600 hover:bg-prussian-blue-800 text-zinc-300 hover:text-zinc-200 rounded-md py-2 px-4 font-medium"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// set data reference to bind to the form
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const errorSuccess = ref<boolean | null>(null);

const { signUp, errorMsg } = useAuth();

const handleSignup = async () => {
  if (password.value === confirmPassword.value) {
    await signUp(email.value, password.value);
    if (!errorMsg.value) {
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      return navigateTo("/");
    }
  } else {
    errorSuccess.value = false;
    errorMsg.value = "Your passwords do not match";
    setTimeout(() => {
      errorSuccess.value = null;
      errorMsg.value = "";
    }, 3000);
  }
};
</script>

<style scoped></style>

export default defineNuxtPlugin(() => {
  const { isLoggedIn } = useAuth();
  // globally watch user and route. If a user and a redirect query param exist:
  watchEffect(() => {
    if (isLoggedIn()) {
      const route = useRoute();
      if (route.query.redirect)
        navigateTo({ path: route.query.redirect as string });
    }
  });
});

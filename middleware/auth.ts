export default defineNuxtRouteMiddleware((to) => {
  // check the user status
  const { isLoggedIn } = useAuth();

  // if the user is not logged in, then we redirect to the signin page
  if (!isLoggedIn()) {
    //reroute to login saving the current destination in the redirect query param
    return navigateTo({ path: "/signin", query: { redirect: to.path } });
  }
});

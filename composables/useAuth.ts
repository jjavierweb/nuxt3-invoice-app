// We will handle authentication related methods and tasks here
import type { User } from "@supabase/gotrue-js";

export const useAuth = () => {
  const user = useState<User | null>("user", () => null);
  const errorMsg = ref<string | null>(null);

  const { auth } = useSupabaseAuthClient();

  // check authentication change
  auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null;
  });

  // handle signup
  const signUp = async (email: string, password: string) => {
    try {
      errorMsg.value = "";
      const { data, error } = await auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return data.user;
    } catch (error: any) {
      errorMsg.value = error.message;
    }
  };

  // handle signin
  const signIn = async (email: string, password: string) => {
    // set the error message to nothing
    errorMsg.value = null;

    // handle login
    try {
      errorMsg.value = "";
      const { data, error } = await auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data.user;
    } catch (error: any) {
      errorMsg.value = error.message;
    }
  };

  // handleSignOut
  const signOut = async () => {
    errorMsg.value = "";
    try {
      const { error } = await auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      errorMsg.value = error.message;
    }
  };

  // check user is logged in
  const isLoggedIn = () => {
    return !!user.value;
  };

  return {
    user,
    errorMsg,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
  };
};

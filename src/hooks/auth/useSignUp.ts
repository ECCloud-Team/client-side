import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSignUp = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        "hhttp://localhost:4000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const data = await response.json();
      const token = data.token;

      // Save the token to localStorage
      localStorage.setItem("authToken", token);

      setError(null);
      router.push("/");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, signUp };
};

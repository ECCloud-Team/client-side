import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogout = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const logout = async () => {
    setLoading(true);
    try {
      // Hapus token dari localStorage
      localStorage.removeItem("authToken");
      setError(null);
      // Redirect ke halaman login atau halaman lain yang sesuai
      router.push("/login");
    } catch (error: any) {
      setError("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, logout };
};

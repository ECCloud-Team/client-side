"use client";
import React, { createContext, useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
}

export const UserContext = createContext<User | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await fetch("http://localhost:4000/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUser(data);
        localStorage.setItem("signedin", "true");
        console.log("signedin");
      } catch (error: any) {
        console.error(error.message);
        setUser(null);
        localStorage.removeItem("signedin");
        console.log("signedout");
      }
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;

"use client"
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export const useCurrentUser = () => {
  const user = useContext(UserContext);
  return { user };
};

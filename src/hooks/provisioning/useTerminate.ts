"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useTerminate = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const terminate = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const res = await fetch(`http://localhost:4000/files/terminate`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        setError("Network response was not ok");
        throw new Error("Network response was not ok");
      }
      setLoading(false);
      return res.json();
    } catch (err: any) {
      setError(err.message);
      throw new Error(err.message);
    }
  };
  return { terminate, loading, error };
};

export default useTerminate;

"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useGetTotalBilling = () => {
  const [totalBilling, setTotalBilling] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTotalBilling = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await fetch(
          `http://localhost:4000/billing/total`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setTotalBilling(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalBilling();
  }, []);

  return { totalBilling, loading, error };
};
export default useGetTotalBilling;

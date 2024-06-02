"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useGetHourlyUsage = () => {
  const [hourlyUsage, setHourlyUsage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHourlyUsage = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const res = await fetch(
          `http://localhost:4000/billing/hourly-usage`,
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
        setHourlyUsage(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHourlyUsage();
  }, []);

  return { hourlyUsage, loading, error };
};
export default useGetHourlyUsage;

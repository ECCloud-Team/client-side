"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useGetFoldersInRoot = (user_id: String) => {
  const [folders, setFolders] = useState<Folder[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/folders/root/${user_id}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Folder[] = await res.json();
        setFolders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, []);

  return { folders, loading, error };
};
export default useGetFoldersInRoot;

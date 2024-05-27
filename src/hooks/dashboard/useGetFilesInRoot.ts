"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useGetFilesInRoot = (user_id:String) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(`http://localhost:4000/files/root/${user_id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: File[] = await res.json();
        setFiles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { files, loading, error };
};
export default useGetFilesInRoot;

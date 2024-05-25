"use client";
import { useState, useEffect } from "react";

interface Folder {
  _id: string;
  user_id: string;
  name: string;
  parent_id: string | null;
  files: File[];
  subFolders: Folder[];
}

interface File {
  _id: string;
  user_id: string;
  folder_id: string;
  name: string;
  // tambahkan field lain sesuai kebutuhan
}

const useFolderTree = (userId: string) => {
  const [folderTree, setFolderTree] = useState<Folder[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFolderTree = async () => {
      try {
        const res = await fetch(`http://localhost:4000/folders/folder-tree/${userId}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Folder[] = await res.json();
        setFolderTree(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFolderTree();
  }, [userId]);

  return { folderTree, loading, error };
};

export default useFolderTree;

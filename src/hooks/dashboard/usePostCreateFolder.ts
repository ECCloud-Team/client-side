"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FolderParams {
  user_id: string;
  name: string;
  parent_id: string | null;
}

const usePostCreateFolder = () => {
  const createFolder = async ({ name, parent_id = null }: FolderParams) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch("http://localhost:4000/folders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, parent_id }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return { createFolder };
};

export default usePostCreateFolder;

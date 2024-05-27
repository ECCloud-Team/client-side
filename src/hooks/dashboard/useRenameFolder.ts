"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FolderRenameParams {
  id: string;
  name: string;
}

const useRenameFolder = () => {
  const renameFolder = async ({ id, name }: FolderRenameParams) => {
    try {
      const res = await fetch(`http://localhost:4000/folders/rename/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  return { renameFolder };
};

export default useRenameFolder;

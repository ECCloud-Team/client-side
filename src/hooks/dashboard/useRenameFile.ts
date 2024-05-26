"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FileRenameParams {
  id: string;
  filename: string;
}

const useRenameFile = () => {
  const renameFile = async ({ id, filename }: FileRenameParams) => {
    try {
      const res = await fetch(`http://localhost:4000/files/rename/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filename }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  return { renameFile };
};

export default useRenameFile;

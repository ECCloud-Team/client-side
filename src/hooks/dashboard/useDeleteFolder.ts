"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FolderDeleteParams {
  id: string;
  name: string;
}

const useDeleteFolder = () => {
  const deleteFolder = async ({ id }: FolderDeleteParams) => {
    try {
      const res = await fetch(`http://localhost:4000/folders/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  return { deleteFolder };
};

export default useDeleteFolder;

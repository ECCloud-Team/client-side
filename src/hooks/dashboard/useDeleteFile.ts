"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FileDeleteParams {
  id: string;
}

const useDeleteFile = () => {
  const deleteFile = async ({ id }: FileDeleteParams) => {
    try {
      const token = localStorage.getItem("authToken");
      const res = await fetch(`http://localhost:4000/files/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  return { deleteFile };
};

export default useDeleteFile;

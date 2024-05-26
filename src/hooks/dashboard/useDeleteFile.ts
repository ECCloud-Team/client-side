"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FileDownloadParams {
  id: string;
}

const useDownloadFile = () => {
const [file, setFile] = useState<File[]>([]);
  const downloadFile = async ({ id }: FileDownloadParams) => {
    try {
      const res = await fetch(`http://localhost:4000/files/download/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setFile(await res.json());
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  return { downloadFile, file };
};

export default useDownloadFile;

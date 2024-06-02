"use client";
import { useState } from "react";

interface FileDownloadParams {
  id: string;
}

const useDownloadFile = () => {
  const [file, setFile] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const downloadFile = async ({ id }: FileDownloadParams) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const res = await fetch(`http://localhost:4000/files/download/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        setError(errorText);
        setLoading(false);
        throw new Error(errorText);
      }

      const blob = await res.blob();
      console.log(blob);
      setFile(blob);
      setLoading(false);
      return blob;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      throw new Error(err.message);
    }
  };

  return { downloadFile, file, error, loading };
};

export default useDownloadFile;

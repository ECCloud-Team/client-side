"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

const useGetFilesByFolderId = (folderId:String) => {
    const [files, setFiles] = useState<File[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchFiles = async () => {
        try {
            const res = await fetch(`http://localhost:4000/files/folder/${folderId}`);
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
    }, [folderId]);
    
    return { files, loading, error };
}
export default useGetFilesByFolderId;

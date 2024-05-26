"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FileParams {
    user_id: string;
    folder_id: string | null;
    file: File;
}

const usePostUploadFile = () => {
    const uploadFile = async ({user_id, folder_id, file}: FileParams) => {
        try {
            const formData = new FormData();
            formData.append("user_id", user_id);
            formData.append("folder_id", folder_id as string | "");
            formData.append("file", file as any);
            const res = await fetch("http://localhost:4000/files/upload", {
                method: "POST",
                body: formData,
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        } catch (err: any) {
            throw new Error(err.message);
        }
    };
    return { uploadFile };
}

export default usePostUploadFile;

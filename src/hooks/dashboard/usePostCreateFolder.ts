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
    const createFolder = async ({user_id, name, parent_id}: FolderParams) => {
        try {
            const res = await fetch("http://localhost:4000/folders/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id, name, parent_id }),
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
}

export default usePostCreateFolder;

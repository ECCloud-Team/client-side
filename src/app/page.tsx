"use client";
import useFolderTree from "@/hooks/useFolderTree";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import Searchbar from "./_components/Searchbar";
import Folderlist from "./_components/folder/Folderlist";
import useGetFoldersInRoot from "@/hooks/useGetFoldersInRoot";
import useGetFilesInRoot from "@/hooks/useGetFilesInRoot";

export default function Home() {
  const userID = "user123";
  const { folders, loading, error } = useGetFoldersInRoot(userID);
  const {
    files,
    loading: loadingFiles,
    error: errorFiles,
  } = useGetFilesInRoot(userID);
  return (
    <div className="flex">
      <Sidebar >
        <li></li>
      </Sidebar>
      <div className="flex flex-col w-full">
        <Searchbar />
        <Folderlist folders={folders} files={files}/>
      </div>
    </div>
  );
}

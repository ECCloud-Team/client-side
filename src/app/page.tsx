"use client";
import useFolderTree from "@/hooks/useFolderTree";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import Searchbar from "./_components/Searchbar";
import Folderlist from "./_components/folder/Folderlist";
import Filelist from "./_components/file/Filelist";
import ActivityPage from "./activitylog/activity";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar >
        <li></li>
      </Sidebar>
      <div className="w-full">
        <Searchbar />
        <div className="flex flex-col gap-8">
          <Folderlist />
          <Filelist />
        </div>
      </div>
    </div>
  );
}

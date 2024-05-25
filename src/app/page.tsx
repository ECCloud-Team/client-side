"use client";
import useFolderTree from "@/hooks/useFolderTree";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "./_components/Sidebar";
import Searchbar from "./_components/Searchbar";
import Folderlist from "./_components/folder/Folderlist";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar >
        <li></li>
      </Sidebar>
      <div className="flex flex-col w-full">
        <Searchbar />
        <Folderlist />
      </div>
    </div>
  );
}

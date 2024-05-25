import React from "react";
import Folderitems from "./Folderitems";
import Link from "next/link";
import useFolderTree from "@/hooks/useFolderTree";
import useGetFoldersByParentId from "@/hooks/useGetFoldersByParentId";
import useGetFilesInRoot from "@/hooks/useGetFilesInRoot";
import useGetFoldersInRoot from "@/hooks/useGetFoldersInRoot";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FolderlistProps {
  folders: Folder[] | null;
}

export default function Folderlist({ folders }: FolderlistProps) {
  return (
    <div>
      <div className="p-7 mb-16 mx-12 bg-indigo-50 rounded-lg">
        <h2 className="text-[17px] font-semibold items-center">
          Folders
          <span className="float-right text-blue-500 font-normal text-[13px] cursor-pointer">
            View All
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-3">
          {folders?.map((item, i) => (
            <Link key={i} href={`/folders/${item._id}`}>
              <Folderitems folder={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

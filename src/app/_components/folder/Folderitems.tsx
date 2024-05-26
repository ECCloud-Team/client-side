import exp from "constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Folder } from "@/types/Folder";

interface FolderitemsProps {
  folder: Folder;
}

export default function Folderitems({ folder }: FolderitemsProps) {
  return (
    <div
      className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer"
    >
      <FontAwesomeIcon icon={faFolder} className="text-[40px]" />
      <h2 className="line-clamp-2 text-center" style={{fontFamily:'Inter'}}>{folder.name}</h2>
    </div>
  );
}

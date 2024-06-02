import exp from "constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Folder } from "@/types/Folder";
import { useState } from "react";
import Link from "next/link";
import RenameFolderModal from "../renameFolder";
import useDeleteFolder from "@/hooks/dashboard/useDeleteFolder";

interface FolderitemsProps {
  folder: Folder;
  openModal: (folderId: string) => void;
  toggleDropdown: (folderId: string) => void;
  isDropdownOpen: boolean;
}

export default function Folderitems({
  folder,
  openModal,
  toggleDropdown,
  isDropdownOpen,
}: FolderitemsProps) {
  const { deleteFolder } = useDeleteFolder();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteFolder({ id: folder._id });
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
            gap-1 hover:scale-105 hover:shadow-md cursor-pointer relative"
    >
      <div className="flex">
        <FontAwesomeIcon icon={faFolder} className="text-[40px]" />
        <span>
          <button
            type="button"
            className="absolute top-2 right-2 z-20 hover:bg-gray-300 flex items-center justify-center rounded-full w-6 h-6"
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown(folder._id);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </span>
      </div>
      {isDropdownOpen && (
        <div className="absolute right-1 z-30 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md">
          <button onClick={(e) => { e.stopPropagation(); openModal(folder._id); }} className="text-sm">
            Rename Folder
          </button>
          <div className="h-px bg-gray-300 w-full"></div>
          <button onClick={handleDelete} className="text-sm">
            Delete Folder
          </button>
        </div>
      )}
      <h2 className="line-clamp-2 text-center" style={{ fontFamily: "Inter" }}>
        {folder.name}
      </h2>
    </div>
  );
}

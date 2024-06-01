import React from "react";
import Folderitems from "./Folderitems";
import Link from "next/link";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import RenameFolderModal from "../renameFolder";
// import useFolderTree from "@/hooks/useFolderTree";

interface FolderlistProps {
  folders: Folder[] | null;
}

export default function Folderlist({ folders }: FolderlistProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // New state for managing open dropdown
  const router = useRouter();

  const openModal = (folderId: string) => {
    setCurrentFolderId(folderId);
    setShowModal(true);
    setOpenDropdown(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentFolderId(null);
  };

  const toggleDropdown = (folderId: string) => {
    setOpenDropdown(openDropdown === folderId ? null : folderId);
  };

  return (
    <div>
      <div className="p-7 mb-16 mx-12 bg-indigo-50 rounded-lg">
        <h2 className="text-[17px] font-semibold items-center">Folders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-3">
          {folders?.map((item, i) => (
            <div key={i} onDoubleClick={() => router.push(`/folders/${item._id}`)}>
              <Folderitems 
                folder={item} 
                openModal={openModal}
                toggleDropdown={toggleDropdown}
                isDropdownOpen={openDropdown === item._id}
              />
            </div>
          ))}
        </div>
      </div>
      {showModal && currentFolderId && (
        <RenameFolderModal
          folder_id={currentFolderId}
          isOpen={showModal}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

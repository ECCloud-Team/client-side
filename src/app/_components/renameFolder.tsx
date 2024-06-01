"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useRenameFolder from "@/hooks/dashboard/useRenameFolder";

const RenameFolderModal = ({
  isOpen,
  onClose,
  folder_id,
}: {
  isOpen: boolean;
  onClose: () => void;
  folder_id: string;
}) => {
  const { renameFolder } = useRenameFolder();
  const [folderName, setFolderName] = useState("");

  const handleRenameFolder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    renameFolder({
      name: folderName,
      id: folder_id,
    });
    setFolderName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 sm:mx-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "Inter" }}>
            Rename Folder
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-[30px]"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleRenameFolder}>
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none rounded-md w-full mb-3 text-[15px]"
            style={{ fontFamily: "Inter" }}
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded-md p-2 px-3 w-full text-[15px]"
            style={{ fontFamily: "Inter" }}
            type="submit"
          >
            Rename
          </button>
        </form>
      </div>
    </div>
  );
};

export default RenameFolderModal;
"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faTimes } from "@fortawesome/free-solid-svg-icons";
import useRenameFile from "@/hooks/dashboard/useRenameFile";

const RenameFileModal = ({
  isOpen,
  onClose,
  file_id
}: {
  isOpen: boolean;
  onClose: () => void;
  file_id: string;
}) => {
  const { renameFile } = useRenameFile();
  const [fileName, setFileName] = useState("");
  const handleRenameFile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lakukan tindakan untuk membuat File baru di sini
    renameFile({
      filename: fileName,
      id: file_id,
    });
    setFileName("");
    // Tutup modal setelah proses pembuatan File selesai
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "Inter" }}>
            Rename File
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-[30px]"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <form onSubmit={handleRenameFile}>
          <input
            type="text"
            placeholder="File Name"
            className="p-2 border-[1px] outline-none
                            rounded-md w-full mb-3 text-[15px]"
            style={{ fontFamily: "Inter" }}
            onChange={(e) => setFileName(e.target.value)}
          />
          <button
            className="bg-blue-500
                text-white rounded-md p-2 px-3 w-full text-[15px]"
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

export default RenameFileModal;

import moment from "moment";
import { Folder } from "lucide-react";
import React from "react";
import { File } from "@/types/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFolder,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import RenameFileModal from "../renameFile";
import useDeleteFile from "@/hooks/dashboard/useDeleteFile";
import useDownloadFile from "@/hooks/dashboard/useDownloadFile";

interface FileitemsProps {
  file: File;
}
export default function Fileitems({ file }: FileitemsProps) {
  const { downloadFile, file:downloadedFile, error, loading} = useDownloadFile();
  const { deleteFile } = useDeleteFile();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = (e: any) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDownloadFile = async () => {
    try {
      const blob = await downloadFile({ id: file._id });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.filename; // Ganti dengan nama file yang sesuai
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error('Download failed:', err);
    }
  }

  const handleDelete = () => {
    deleteFile({ id: file._id });
  };
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-2 justify-between cursor-pointer hover:bg-white
        p-3 rounded-md"
        onDoubleClick={handleDownloadFile}
    >
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faFile} className="text-[20px]" />
        <h2 className="text-[15px]">{file.filename}</h2>
        {loading && <p className="text-[15px]">Downloading...</p>}
        {error && <p className="text-[15px]">{error}</p>}
      </div>
      <div className="grid grid-cols-3">
        <h2 className="text-[15px]">
          {moment(file.uploadDate).format("MMMM DD, YYYY")}
        </h2>
        <h2 className="text-[15px]">{file.size} KB</h2>
        <button
          type="button"
          className="relative z-10 hover:bg-gray-300 flex items-center mx-auto justify-center rounded-full w-6 h-6"
          data-dropdown-toggle="dropdown"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className="" />
        </button>
        {dropdownOpen && (
          <ul className="absolute right-14 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md ">
            <button onClick={openModal} className="text-sm">
              Rename File
            </button>
            <div className="h-px bg-gray-300 w-full"></div>
            <button onClick={handleDelete} className="text-sm">
              Delete File
            </button>
            <RenameFileModal
              file_id={file._id}
              isOpen={showModal}
              onClose={closeModal}
            />
          </ul>
        )}
      </div>
    </div>
  );
}

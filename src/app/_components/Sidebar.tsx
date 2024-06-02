"use client";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faPlus,
  faStar,
  faTrash,
  faEllipsisVertical,
  faHome,
  faClockRotateLeft,
  faFileInvoiceDollar,
  faBox,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/inter";
import CreateFolderModal from "./Createfolder";
import usePostUploadFile from "@/hooks/dashboard/usePostUploadFile";
import Tracker from "./Tracker";
import { useLogout } from "@/hooks/auth/useLogout";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import useGetTotalSize from "@/hooks/billing/useGetTotalSize";

export default function Sidebar({
  folderParentId,
  children,
}: {
  folderParentId: string;
  children: React.ReactNode;
}) {
  const { uploadFile } = usePostUploadFile();
  const [fileUpload, setFileUpload] = useState<File>();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const newDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useCurrentUser();
  const { logout, error, loading } = useLogout();
  const {
    totalSize,
    loading: totalSizeLoading,
    error: totalSizeError,
  } = useGetTotalSize();

  useEffect(() => {
    if (fileUpload) {
      uploadFile({
        user_id: "user123",
        folder_id: folderParentId,
        file: fileUpload,
      });
    }
  }, [fileUpload]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        newDropdownRef.current &&
        !newDropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <aside className="h-screen w-60 sticky top-0 left-0 ">
      <nav className="h-full flex flex-col bg-indigo-50 border-r-2 border-indigo-200 shadow-sm">
        <div className="px-12 py-5 flex justify-between items-center font-serif text-4xl font-bold">
          <div className="items-center relative px-1">
            FitBox
            <button
              type="button"
              className="inline-flex mt-2 px-7 py-2 text-[16px] text-sm bg-white border border-gray-300 rounded-full"
              style={{ fontFamily: "Inter" }}
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2 mt-0.5" />
              New
            </button>
            {dropdownOpen && (
              <div
                ref={newDropdownRef}
                className="absolute z-[1] flex flex-col space-y-4 p-2 m-2 bg-white rounded-md"
              >
                <button
                  className="text-sm"
                  style={{ fontFamily: "Inter" }}
                  onClick={openModal}
                >
                  New Folder
                </button>
                <CreateFolderModal
                  parent_id={folderParentId}
                  isOpen={showModal}
                  onClose={closeModal}
                />
                <button
                  className="text-sm relative"
                  style={{ fontFamily: "Inter" }}
                >
                  <input
                    type="file"
                    onChange={(e) => setFileUpload(e.target.files![0])}
                    className="absolute -left-2 top-0 h-full w-full cursor-pointer bg-black opacity-0"
                  />
                  <span>File Upload</span>
                </button>
              </div>
            )}
            <button
              type="button"
              className="flex justify-between gap-1 mt-10 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faHome} className="mb-0.5 mr-2" />
              <Link href="/" style={{ fontFamily: "Inter" }}>
                Home
              </Link>
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faBox} className="mb-1 mr-2" />
              <Link href="/storg" style={{ fontFamily: "Inter" }}>
                Storage
              </Link>
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                className="mb-1 mr-2"
              />
              <Link href="/billing" style={{ fontFamily: "Inter" }}>
                Billing
              </Link>
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon
                icon={faClock}
                className="mr-2 mb-0.5"
              />
              <Link href="/hourly-usage" style={{ fontFamily: "Inter" }}>
                Hourly Usage
              </Link>
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                className="mr-2 mb-0.5"
              />
              <Link href="/activitylog" style={{ fontFamily: "Inter" }}>
                Logs
              </Link>
            </button>
          </div>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="w-full flex justify-center px-6 pb-5">
          <button
            type="button"
            className="mt-10 text-[17px] w-full flex flex-col"
          >
            <Link href="/storg" style={{ fontFamily: "Inter" }}>
              <Tracker totalSize={totalSize as number} />
            </Link>
          </button>
        </div>
        <div className="border-t border-indigo-100 flex p-3 bg-white">
          <div className="flex justify-between item-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">{user?.name}</h4>
              <span className="text-xs text-gray-600">{user?.email}</span>
            </div>
            <button type="button" onClick={toggleUserDropdown}>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="mr-2 mt-0.5"
              />
            </button>
            {userDropdownOpen && (
              <div
                ref={userDropdownRef}
                className="absolute left-56 bottom-1 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md "
              >
                <button
                  className="text-sm w-16 drop-shadow-lg"
                  onClick={handleLogout}
                  disabled={loading}
                >
                  {loading ? "Loading" : "Log Out"}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}

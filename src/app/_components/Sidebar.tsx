"use client";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faPlus,
  faStar,
  faTrash,
  faEllipsisVertical,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [newdropdownOpen, setNewDropdownOpen] = useState(false);
  const [userdropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleNewDropdown = () => {
    setNewDropdownOpen(!newdropdownOpen);
  };
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userdropdownOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <aside className="h-screen w-60">
      <nav className="h-full flex flex-col bg-indigo-50 border-r-2 border-indigo-200 shadow-sm">
        <div className="px-12 py-5 flex justify-between items-center font-serif text-4xl font-bold">
          <div className="items-center dropdown relative px-1">
            FitBox
            <button
              type="button"
              className="inline-flex mt-2 px-7 py-2 text-[16px] text-sm bg-white border border-gray-300 rounded-full"
              data-dropdown-toggle="dropdown"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2 mt-0.5" />
              New
            </button>
            {dropdownOpen && (
              <ul className="absolute z-[1] flex flex-col space-y-4 p-2 m-2 shadow bg-white rounded-md">
                <Link href="/categories/New-Folder" className="text-sm">
                  New Folder
                </Link>
                <Link href="/categories/File-Upload" className="text-sm">
                  File Upload
                </Link>
                <Link href="/categories/Folder-Upload" className="text-sm">
                  Folder Upload
                </Link>
              </ul>
            )}
            <button
              type="button"
              className="flex justify-between gap-2 font-sans mt-10 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faHome} className="mr-2 " />
              <Link href="/">Home</Link>
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-10 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faFolder} className="mr-2" />
              New Folder
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faStar} className="mr-2 mb-0.5" />
              Starred
            </button>
            <button
              type="button"
              className="flex justify-between gap-2 mt-5 py-2 items-center text-[17px] text-sm hover:text-blue-300"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2 justify-center" />
              Bins
            </button>
          </div>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t border-indigo-100 flex p-3 bg-white">
          <div className="flex justify-between item-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-seibold">Test</h4>
              <span className="text-xs text-gray-600">Tes@gmail.com</span>
            </div>
            <button
              type="button"
              className=""
              data-dropdown-toggle="dropdown"
              onClick={toggleUserDropdown}
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="mr-2 mt-0.5"
              />
            </button>
            {userdropdownOpen && (
              <ul className="absolute left-56 bottom-5 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md ">
                <Link href="/categories/New-Folder" className="text-sm  hover:">
                  Settings
                </Link>
                <div className="h-px bg-gray-300 w-full"></div>
                <Link href="/activitylog" className="text-sm">
                  Activity
                </Link>
                <div className="h-px bg-gray-300 w-full"></div>
                <Link href="/categories/File-Upload" className="text-sm">
                  Log Out
                </Link>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}

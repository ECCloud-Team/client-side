import React from "react";
import Folderitems from "./Folderitems";
import Link from "next/link";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import useFolderTree from "@/hooks/useFolderTree";

interface FolderlistProps {
  folders: Folder[] | null;
}

export default function Folderlist({ folders }: FolderlistProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <div className="p-7 mb-16 mx-12 bg-indigo-50 rounded-lg">
        <h2 className="text-[17px] font-semibold items-center">
          Folders
          <span className="float-right font-normal text-[16px] cursor-pointer">
            <button
              type="button"
              className=""
              data-dropdown-toggle="dropdown"
              onClick={toggleDropdown}
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="mr-2 mt-0.5"
              />
            </button>
            {dropdownOpen && (
              <ul className="absolute right-14 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md ">
                <Link href="/categories/New-Folder" className="text-sm  hover:">
                  Rename Folder
                </Link>
                <div className="h-px bg-gray-300 w-full"></div>
                <Link href="/categories/File-Upload" className="text-sm">
                  Delete Folder
                </Link>
              </ul>
            )}
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

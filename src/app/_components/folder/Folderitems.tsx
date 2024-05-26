import exp from "constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Folder } from "@/types/Folder";
import { useState } from "react";
import Link from "next/link";

interface FolderitemsProps {
  folder: Folder;
}

export default function Folderitems({ folder }: FolderitemsProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
    return (
        <div
        className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
            gap-1 hover:scale-105 hover:shadow-md cursor-pointer"
        >
        <div className="flex">
            <FontAwesomeIcon icon={faFolder} className="text-[40px]" />
            <span className="float-right">
            <button
                    type="button"
                    className="absolute top-2 right-2"
                    data-dropdown-toggle="dropdown"
                    onClick={toggleDropdown}
                    >
                    <FontAwesomeIcon
                        icon={faEllipsisVertical}
                        className="mr-2 mt-0.5"
                        />
            </button>
            </span>
            <div>
            </div>
        </div>
            {dropdownOpen && (
                <ul className="absolute right-1 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md ">
                    <Link href="/categories/New-Folder" className="text-sm  hover:">
                    Rename Folder
                    </Link>
                    <div className="h-px bg-gray-300 w-full"></div>
                    <Link href="/categories/File-Upload" className="text-sm">
                    Delete Folder
                    </Link>
                </ul>
            )}
        <h2 className="line-clamp-2 text-center" style={{fontFamily:'Inter'}}>{folder.name}</h2>
        </div>
    );
    }

import moment from "moment";
import { Folder } from "lucide-react";
import React from "react";
import { File } from "@/types/File";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";


interface FileitemsProps {
  file : File;
}
export default function Fileitems({file}:FileitemsProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 justify-between cursor-pointer hover:bg-white
        p-3 rounded-md">
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faFile} className='text-[20px]' />
                <h2 className="text-[15px]">{file.filename}</h2>
            </div>
            <div className="grid grid-cols-3">
                <h2 className="text-[15px]">{moment(file.uploadDate).format("MMMM DD, YYYY")}</h2>
                <h2 className="text-[15px]">{(file.size)}</h2>
                <button
                    type="button"
                    className=""
                    data-dropdown-toggle="dropdown"
                    onClick={toggleDropdown}
                    >
                    <FontAwesomeIcon icon={faEllipsisVertical} className="mr-2 mt-0.5" />
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute right-14 z-10 flex flex-col space-y-2 p-2 m-2 shadow bg-white rounded-md ">
                        <Link href="/categories/New-Folder" className="text-sm  hover:">
                            Rename File
                        </Link>
                        <div className="h-px bg-gray-300 w-full"></div>
                        <Link href="/categories/File-Upload" className="text-sm">
                            Delete File
                        </Link>
                        </ul>
                    )}
            </div>
        </div>
    )

}

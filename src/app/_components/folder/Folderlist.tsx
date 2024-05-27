import React from "react";
import Folderitems from "./Folderitems";
import Link from "next/link";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import useFolderTree from "@/hooks/useFolderTree";

interface FolderlistProps {
  folders: Folder[] | null;
}

export default function Folderlist({ folders }: FolderlistProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <div className="p-7 mb-16 mx-12 bg-indigo-50 rounded-lg">
        <h2 className="text-[17px] font-semibold items-center">
          Folders
          <span className="float-right font-normal text-[12px] cursor-pointer text-blue-500">
            View All
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-3 ">
          {folders?.map((item, i) => (
            <div key={i} onClick={() => router.push(`/folders/${item._id}`)}>
              <Folderitems folder={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

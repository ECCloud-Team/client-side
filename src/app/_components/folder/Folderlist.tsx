import React from "react";
import Folderitems from "./Folderitems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
// import useFolderTree from "@/hooks/useFolderTree";

export default function Folderlist() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
  };
  // const userID = "user123";
  // const { folderTree, loading, error } = useFolderTree(userID);
  const contohFolderTree = [
    {
      _id: "665010a8fba2bdd8f6408ddc",
      user_id: "user123",
      name: "My Folder",
      parent_id: null,
      createdDate: "2024-05-24T03:59:36.220Z",
      __v: 0,
      files: [
        {
          _id: "6650126ac08d9bafd0c1b01d",
          user_id: "user123",
          filename: "succsess icon (1).svg",
          path: "uploads\\1716523626718-succsess icon (1).svg",
          size: 4727,
          folder_id: "665010a8fba2bdd8f6408ddc",
          uploadDate: "2024-05-24T04:07:06.741Z",
          __v: 0,
        },
      ],
      subFolders: [
        {
          _id: "66518430d01c604894f53321",
          user_id: "user123",
          name: "My Folder2",
          parent_id: "665010a8fba2bdd8f6408ddc",
          createdDate: "2024-05-25T06:24:48.185Z",
          __v: 0,
          files: [],
          subFolders: [],
        },
      ],
    },
  ];
  const folderlist = [
    {
      id: 1,
      name: "Folder 1",
    },
    {
      id: 2,
      name: "Folder 2",
    },
    {
      id: 3,
      name: "Folder 3",
    },
    {
      id: 4,
      name: "Folder 4",
    },
    {
      id: 5,
      name: "Folder 5",
    },
  ];
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // console.log(folderTree);
  return (
    <div className="p-7 h-[250px]  mx-12 bg-indigo-50 rounded-lg">
      <h2 className="text-[17px] font-bold items-center font-sans">
        Recent Folders
        <span className="float-right font-normal text-[16px] cursor-pointer">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-3 font-sans text-[14px]">
        {folderlist.map((item, i) => (
          <Folderitems key={i} folder={item} />
        ))}
      </div>
    </div>
  );
}

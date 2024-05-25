import exp from "constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Folder } from "@/types/Folder";

// interface FolderitemsProps {
//   // folder: {
//   //     id: number;
//   //     name: string;
//   // };

//   folder: {
//     _id: string;
//     user_id: string;
//     name: string;
//     parent_id: string | null;
//     createdDate: string;
//     __v: number;
//     files: {
//       _id: string;
//       user_id: string;
//       filename: string;
//       path: string;
//       size: number;
//       folder_id: string;
//       uploadDate: string;
//       __v: number;
//     }[];
//     subFolders: {
//       _id: string;
//       user_id: string;
//       name: string;
//       parent_id: string;
//       createdDate: string;
//       __v: number;
//       files: any[];
//       subFolders: any[];
//     }[];
//   };
// }

interface FolderitemsProps {
  folder: Folder;
}
<<<<<<< HEAD
=======
export default function Folderitems({folder}:FolderitemsProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer">
            <FontAwesomeIcon icon={faFolder} className='text-[40px]' />
            <h2 className="line-clamp-2 pt-2 text-center">{folder.name}</h2>
        </div>
    )
>>>>>>> ef5d57ae05ca4f97a6e3cca77d14dfbc4330bf32

export default function Folderitems({ folder }: FolderitemsProps) {
  return (
    <div
      className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer"
    >
      <FontAwesomeIcon icon={faFolder} className="text-[40px]" />
      <h2 className="line-clamp-2 text-center">{folder.name}</h2>
    </div>
  );
}

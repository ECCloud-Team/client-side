import exp from "constants";
import { Folder } from "lucide-react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from "@fortawesome/free-solid-svg-icons";

interface FolderitemsProps {
    folder: {
        id: number;
        name: string;
    };
}
export default function Folderitems({folder}:FolderitemsProps) {
    return (
        <div className="w-full flex flex-col justify-center items-center h-[140px] border-[2px] border-white rounded-lg p-5 
        gap-1 hover:scale-105 hover:shadow-md cursor-pointer">
            <FontAwesomeIcon icon={faFolder} className='text-[40px]' />
            <h2 className="line-clamp-2 pt-2 text-center">{folder.name}</h2>
        </div>
    )

}

import moment from "moment";
import { Folder } from "lucide-react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";


interface FileitemsProps {
    file: {
        id: number;
        name: string;
        modifiedAt: string;
        size: string;
    };
}
export default function Fileitems({file}:FileitemsProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 justify-between cursor-pointer hover:bg-white
        p-3 rounded-md">
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faFile} className='text-[20px]' />
                <h2 className="text-[15px]">{file.name}</h2>
            </div>
            <div className="grid grid-cols-2">
                <h2 className="text-[15px]">{moment(file.modifiedAt).format("MMMM DD, YYYY")}</h2>
                <h2 className="text-[15px]">{(file.size)}</h2>
            </div>
        </div>
    )

}

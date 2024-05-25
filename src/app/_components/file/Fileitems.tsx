import moment from "moment";
import { Folder } from "lucide-react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { File } from "@/types/File";

interface FileitemsProps {
  file : File;
}
export default function Fileitems({ file }: FileitemsProps) {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-2 justify-between cursor-pointer hover:bg-white
        p-3 rounded-md"
    >
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faFile} className="text-[20px]" />
        <h2 className="text-[15px]">{file.filename}</h2>
      </div>
      <div className="grid grid-cols-2">
        <h2 className="text-[15px]">
          {moment(file.uploadDate).format("MMMM DD, YYYY")}
        </h2>
        <h2 className="text-[15px]">{file.size} KB</h2>
      </div>
    </div>
  );
}

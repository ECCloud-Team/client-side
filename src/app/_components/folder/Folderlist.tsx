import React from "react";
import Folderitems from "./Folderitems";
// import useFolderTree from "@/hooks/useFolderTree";

export default function Folderlist() {
  // const userID = "user123";
  // const { folderTree, loading, error } = useFolderTree(userID);
  
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
      <h2 className="text-[17px] font-semibold items-center">
        Recent Folders
        <span className="float-right text-blue-500 font-normal text-[13px] cursor-pointer">
          View All
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-3">
        {folderlist.map((item, i) => (
          <Folderitems key={i} folder={item}/>
        ))}
      </div>
    </div>
  );
}

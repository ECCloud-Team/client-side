"use client";
import Sidebar from "./_components/Sidebar";
import Searchbar from "./_components/Searchbar";
import Folderlist from "./_components/folder/Folderlist";
import useGetFoldersInRoot from "@/hooks/dashboard/useGetFoldersInRoot";
import useGetFilesInRoot from "@/hooks/dashboard/useGetFilesInRoot";
import Filelist from "./_components/file/Filelist";
import { use } from "react";
import path from "path";

const folderlist = [
  {
    _id: "1",
    user_id: "user123",
    name: "folder1",
    parent_id: null,
    createdDate: new Date(),
    __v: 0,
  },
  {
    _id: "2",
    user_id: "user123",
    name: "folder2",
    parent_id: null,
    createdDate: new Date(),
    __v: 0,
  },
  {
    _id: "3",
    user_id: "user123",
    name: "folder3",
    parent_id: null,
    createdDate: new Date(),
    __v: 0,
  },
  {
    _id: "4",
    user_id: "user123",
    name: "folder4",
    parent_id: null,
    createdDate: new Date(),
    __v: 0,
  },
  {
    _id: "5",
    user_id: "user123",
    name: "folder5",
    parent_id: "1",
    createdDate: new Date(),
    __v: 0,
  },
];

const fileList = [
  {
    _id: "1",
    user_id: "user123",
    filename: "file1",
    path: "path1",
    size: 100,
    folder_id: null,
    uploadDate: new Date(),
    __v: 0,
  },
  {
    _id: "2",
    user_id: "user123",
    filename: "file2",
    path: "path2",
    size: 200,
    folder_id: null,
    uploadDate: new Date(),
    __v: 0,
  },
  {
    _id: "3",
    user_id: "user123",
    filename: "file3",
    path: "path3",
    size: 300,
    folder_id: null,
    uploadDate: new Date(),
    __v: 0,
  },
  {
    _id: "4",
    user_id: "user123",
    filename: "file4",
    path: "path4",
    size: 400,
    folder_id: "1",
    uploadDate: new Date(),
    __v: 0,
  },
  {
    _id: "5",
    user_id: "user123",
    filename: "file5",
    path: "path5",
    size: 500,
    folder_id: "1",
    uploadDate: new Date(),
    __v: 0,
  },
];

export default function Home() {
  const user_id = "user123";
  const { folders, loading, error } = useGetFoldersInRoot(user_id);
  const {
    files,
    loading: loadingFiles,
    error: errorFiles,
  } = useGetFilesInRoot(user_id);
  return (
    <div className="flex">
      <Sidebar folderParentId={""}>
        <li></li>
      </Sidebar>
      <div className="w-full">
        <Searchbar />
        {/* <Folderlist folders={folderlist} /> */}
        <Folderlist folders={folders} />
        <div className="flex flex-col gap-8">
          {/* <Filelist files={fileList}/> */}
          <Filelist files={files}/>
        </div>
      </div>
    </div>
  );
}

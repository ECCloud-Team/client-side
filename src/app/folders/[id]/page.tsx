"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import useGetFolderByParentId from "@/hooks/dashboard/useGetFoldersByParentId";
import useGetFilesByFolderId from "@/hooks/dashboard/useGetFilesByFolderId";
import useGetFolderById from "@/hooks/dashboard/useGetFolderById";
import { cp } from "fs";
import Searchbar from "@/app/_components/Searchbar";
import Folderlist from "@/app/_components/folder/Folderlist";
import Sidebar from "@/app/_components/Sidebar";
import Filelist from "@/app/_components/file/Filelist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

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

const Folder = ({ params }: { params: { id: string } }) => {
  // const router = useRouter();
  // console.log(router);
  // const { id } = router.query;
  const { id } = params;
  console.log(id);

  const { folder, loading, error } = useGetFolderById(id as string);
  const {
    folders,
    loading: loadingFolders,
    error: errorFolders,
  } = useGetFolderByParentId(id as string);
  const {
    files,
    loading: loadingFiles,
    error: errorFiles,
  } = useGetFilesByFolderId(id as string);

  return (
    <div className="flex">
      <Sidebar>
        <li></li>
      </Sidebar>
      <div className="flex flex-col w-full">
        <Searchbar />
        <div>
          <div className="flex mb-4">
            <button
                  type="button"
                  className="flex items-center text-sm hover:text-blue-300"
                >
                  <Link href='/' style={{fontFamily:'Inter'}}><FontAwesomeIcon icon={faCircleArrowLeft} className="ml-12 text-[24px] mr-2 justify-center" /></Link>
            </button>
            <h2 className="font-bold text-[24px] pb-0.5">Nested Folder</h2>
          </div>
        {/* <Folderlist folders={folderlist}  /> */}
        <Folderlist folders={folders}  />
        </div>
        <div className="flex flex-col gap-8">
          {/* <Filelist files={fileList}/> */}
          <Filelist files={files}/>
        </div>
      </div>
    </div>
  );
};

export default Folder;

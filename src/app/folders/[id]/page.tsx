"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import useGetFolderByParentId from '@/hooks/useGetFoldersByParentId';
import useGetFilesByFolderId from '@/hooks/useGetFilesByFolderId';
import useGetFolderById from '@/hooks/useGetFolderById';
import { cp } from 'fs';
import Searchbar from '@/app/_components/Searchbar';
import Folderlist from '@/app/_components/folder/Folderlist';
import Sidebar from '@/app/_components/Sidebar';

const Folder = ({ params }: { params: { id: string } }) => {
  // const router = useRouter();
  // console.log(router);
  // const { id } = router.query;
  const { id } = params;
  console.log(id);

  const { folder, loading, error } = useGetFolderById(id as string);
  const { folders, loading: loadingFolders, error: errorFolders } =  useGetFolderByParentId(id as string);
  const { files, loading: loadingFiles, error: errorFiles } = useGetFilesByFolderId(id as string);

  return (
    <div className="flex">
    <Sidebar >
      <li></li>
    </Sidebar>
    <div className="flex flex-col w-full">
      <Searchbar />
      <Folderlist folders={folders} files={files} />
    </div>
  </div>
    
  );
};

export default Folder;

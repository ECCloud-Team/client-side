"use client";
import Sidebar from "./_components/Sidebar";
import Searchbar from "./_components/Searchbar";
import Folderlist from "./_components/folder/Folderlist";
import useGetFoldersInRoot from "@/hooks/useGetFoldersInRoot";
import useGetFilesInRoot from "@/hooks/useGetFilesInRoot";
import Filelist from "./_components/file/Filelist";

export default function Home() {
  const userID = "user123";
  const { folders, loading, error } = useGetFoldersInRoot(userID);
  const {
    files,
    loading: loadingFiles,
    error: errorFiles,
  } = useGetFilesInRoot(userID);
  return (
    <div className="flex">
      <Sidebar >
        <li></li>
      </Sidebar>
      <div className="w-full">
        <Searchbar />
        <Folderlist folders={folders} files={files}/>
        <div className="flex flex-col gap-8">
          <Filelist />
        </div>
      </div>
    </div>
  );
}

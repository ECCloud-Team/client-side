import React from "react";
import Fileitems from "./Fileitems";
// import useFolderTree from "@/hooks/useFolderTree";

export default function Filelist() {
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
   const fileList=[
         {
             id:1,
             name:'UX Principal.docx',
             type:'doc',
             size:'6272 kB',
             modifiedAt:'Nov 23,2020'
         },
         {
             id:2,
             name:'Data Structure.pdf',
             type:'pdf',
             size:'672 kB',
             modifiedAt:'Nov 23,2022'
         },
         {
             id:3,
             name:'smaple Image.png',
             type:'image',
             size:'400 kB',
             modifiedAt:'Nov 23,2023'
         },
         {
             id:4,
             name:'React Principal.docx',
             type:'doc',
             size:'6272 kB',
             modifiedAt:'Nov 23,2020'
         },
  
     ]
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // console.log(folderTree);
  return (
    <div className="p-7 h-[300px]  mx-12 bg-indigo-50 rounded-lg">
      <h2 className="text-[17px] font-bold items-center font-sans">
        Recent File</h2>
        <div className='grid grid-cols-1
        md:grid-cols-2 
        text-[13px] 
        font-semibold
        border-b-[1px]
        pb-2 mt-3
        border-gray-300
         text-gray-400'>
            <h2>Name</h2>
            <div className='grid grid-cols-2'>
                <h2>Modified</h2>
                <h2>Size
                {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>deleteFile(file)}//
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-5 h-5 float-right text-red-500 hover:scale-110 transition-all">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg > */}
                </h2>        
            </div>
        </div>
        {fileList&&fileList.map((item,index)=>(
            <div key={index}>
            
            <Fileitems file={item} key={index}/> 
            </div>  
             
        ))}
    </div>
  );
}

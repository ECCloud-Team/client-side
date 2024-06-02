"use client";
import { useState, useEffect } from "react";
import { Folder } from "@/types/Folder";
import { File } from "@/types/File";

interface FileParams {
  user_id: string;
  folder_id: string | null;
  file: any;
}

const usePostUploadFile = () => {
  const uploadFile = async ({ folder_id, file }: FileParams) => {
    try {
      const token = localStorage.getItem("authToken");
      const formData = new FormData();
      formData.append("folder_id", folder_id as string | "");
      formData.append("file", file as any);
      const res = await fetch("http://localhost:4000/files/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };
  return { uploadFile };
};

export default usePostUploadFile;
// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function Billing() {
//     const [bill, setBill] = useState(0);
//     const [totalStorage, setTotalStorage] = useState(0);
//     const [userName, setUserName] = useState('');
//     const [message, setMessage] = useState('');
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         const storedUserId = localStorage.getItem('userId');
//         if (storedUserId) {
//             setUserId(storedUserId);
//         } else {
//             setMessage('User ID not found. Please upload files first.');
//         }
//     }, []);

//     const fetchBill = async () => {
//         if (!userId) return;
//         try {
//             const res = await fetch(`/api/billing?userId=${userId}`);
//             const data = await res.json();
//             if (res.ok) {
//                 setBill(data.totalBill);
//                 setTotalStorage(data.totalUsage);
//                 setUserName(data.userName || 'User'); // Assuming userName is returned from the API
//                 setMessage('');
//             } else {
//                 setMessage(data.message || 'Error fetching bill');
//             }
//         } catch (error) {
//             setMessage('Error fetching bill');
//         }
//     };

//     useEffect(() => {
//         if (userId) {
//             fetchBill();
//         }
//     }, [userId]);

// return (
//     <div className="min-h-screen p-6 bg-gray-100">
//         <Head>
//             <title>Billing</title>
//         </Head>
//         <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
//             <h1 className="mb-4 text-2xl font-bold">Billing</h1>
//             <div className="flex flex-col items-center mb-6">
//                 <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
//                     <p className="mb-2 text-lg font-medium">Name</p>
//                     <p className="text-xl font-bold text-gray-800">{userName}</p>
//                 </div>
//                 <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
//                     <p className="mb-2 text-lg font-medium">Total Storage Used</p>
//                     <p className="text-xl font-bold text-gray-800">{(totalStorage / (1024 * 1024 * 1024)).toFixed(2)} GB</p>
//                 </div>
//                 <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
//                     <p className="mb-2 text-lg font-medium">Total Bill</p>
//                     <p className="text-2xl font-bold text-gray-800">Rp. {bill.toFixed(2)}</p>
//                 </div>
//                 {message && <p className="mt-4 text-gray-700">{message}</p>}
//                 <Link href="/" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
//                     Back to Home
//                 </Link>
//                 <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded">Make Payment</button>
//             </div>
//         </div>
//     </div>
// );
// }

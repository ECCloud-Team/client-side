"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../_components/Sidebar";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import useGetTotalSize from "@/hooks/billing/useGetTotalSize";
import useGetTotalBilling from "@/hooks/billing/useGetTotalBilling";

export default function Billing() {
  const [bill, setBill] = useState(0);
  const {user} = useCurrentUser()
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { totalSize } = useGetTotalSize()
  const { totalBilling } = useGetTotalBilling();
  const sizeInKB = totalSize / 1024;
  const sizeInMB = totalSize / (1024 * 1024);
  const sizeInGB = totalSize / (1024 * 1024 * 1024);

  const renderSize = () => {
    if (totalSize < 1024) {
      return `${totalSize} B`;
    } else if (totalSize < 1024 * 1024) {
      return `${sizeInKB.toFixed(2)} KB`;
    } else if (totalSize < 1024 * 1024 * 1024) {
      return `${sizeInMB.toFixed(2)} MB`;
    } else {
      return `${sizeInGB.toFixed(2)} GB`;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (user) {
      setUserId(user);
    } else {
      setMessage("User ID not found. Please upload files first.");
      setLoading(false);
    }
  }, []);

  // const fetchBill = async () => {
  //     if (!userId) return;
  //     try {
  //         const res = await fetch(`/api/billing?userId=${userId}`);
  //         const data = await res.json();
  //         if (res.ok) {
  //             setBill(data.totalBill);
  //             setTotalStorage(data.totalUsage);
  //             setUserName(data.userName || 'User'); // Assuming userName is returned from the API
  //             setMessage('');
  //         } else {
  //             setMessage(data.message || 'Error fetching bill');
  //         }
  //     } catch (error) {
  //         setMessage('Error fetching bill');
  //         setError(error.message);
  //     } finally {
  //         setLoading(false);
  //     }
  // };

  // useEffect(() => {
  //     if (userId) {
  //         fetchBill();
  //     }
  // }, [userId]);

  return (
    <div className="flex">
      <Sidebar folderParentId={""} children={undefined} />
      <div className="w-full min-h-screen p-6">
        <Head>
          <title>Billing</title>
        </Head>
        <div className="w-full p-6 mx-auto bg-white">
          <h1 className="mb-4 text-2xl font-bold">Billing</h1>
          <div className="flex flex-col items-center mb-6">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                  <p className="mb-2 text-lg font-medium">Name</p>
                  <p className="text-xl font-bold text-gray-800">{user?.name}</p>
                </div>
                <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                  <p className="mb-2 text-lg font-medium">Plan</p>
                  <p className="text-xl font-bold">Basic</p>
                </div>
                <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                  <p className="mb-2 text-lg font-medium">Total Storage Used</p>
                  <p className="text-xl font-bold text-gray-800">
                    {renderSize()}
                  </p>
                </div>
                <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                  <p className="mb-2 text-lg font-medium">Total Bill</p>
                  <p className="text-2xl font-bold text-gray-800">
                    Rp. {totalBilling?.totalBilling.toFixed(2)}
                  </p>
                </div>
                {/* {message && <p className="mt-4 text-gray-700">{message}</p>} */}
                {error && <p className="mt-4 text-red-500">Error: {error}</p>}
                <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded">
                  Make Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

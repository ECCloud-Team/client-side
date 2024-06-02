"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import CircularProgress from "../_components/CircularProgress";
import Sidebar from "../_components/Sidebar";
import useGetTotalSize from "@/hooks/billing/useGetTotalSize";
import useTerminate from "@/hooks/provisioning/useTerminate";
export default function Service() {
  const { totalSize } = useGetTotalSize();
  const { terminate, loading, error } = useTerminate();
  const sizeInKB = totalSize / 1024;
  const sizeInMB = totalSize / (1024 * 1024);
  const sizeInGB = totalSize / (1024 * 1024 * 1024);

  const renderSize = () => {
    if (totalSize < 1024) {
      return `${totalSize} B are used`;
    } else if (totalSize < 1024 * 1024) {
      return `${sizeInKB.toFixed(2)} KB are used`;
    } else if (totalSize < 1024 * 1024 * 1024) {
      return `${sizeInMB.toFixed(2)} MB are used`;
    } else {
      return `${sizeInGB.toFixed(2)} GB are used`;
    }
  };

  const handleTerminate = async () => {
    try {
      await terminate();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex align-middle">
      <Sidebar folderParentId={""} children={undefined} />
      <div className="flex min-h-screen p-6 w-full">
        <div className="w-full h-fit p-6 mx-auto ">
          <h1 className="mb-4 text-2xl font-bold">Storage Service</h1>
          <div className="flex flex-col items-center mb-6">
            <div className="w-full p-4 mb-4 rounded-lg bg-blue-50">
              <div className="text-center">
                <p className="mb-2 text-lg font-bold">Your Storage</p>
                <div className="flex justify-center"> </div>
                <p>{renderSize()}</p>
              </div>
            </div>
            <div className="mx-2">
              {error && <p className="text-red-500">{error}</p>}
              <button disabled={loading} onClick={handleTerminate} className="px-4 py-2 mx-2 mt-4 text-white bg-red-500 rounded">
                {loading? "Loading":"Terminate Service"}
              </button>
              <Link href="/billing">
                <button className="px-4 py-2 mx-2 mt-4 text-white bg-green-500 rounded">
                  View Billing
                </button>
              </Link>
              <p className="mt-4 text-gray-700">{}</p>
            </div>
          </div>
          <div className="w-full p-4 mt-8 bg-gray-100 rounded-lg">
            <h2 className="mb-4 text-xl font-bold">Pricing Plans</h2>
            <div className="flex justify-between gap-1">
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Basic</h3>
                <p className="mb-1 text-xl">Rp 1 / GB / HOUR</p>
                <p className="mb-2 text-sm text-gray-600">billed monthly</p>
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Buy now
                </button>
              </div>
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Premium</h3>
                <p className="mb-1 text-xl">Rp 2 / GB / HOUR</p>
                <p className="mb-2 text-sm text-gray-600">billed monthly</p>
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Buy now
                </button>
              </div>
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Diamond</h3>
                <p className="mb-1 text-xl">Rp 3 / GB / HOUR</p>
                <p className="mb-2 text-sm text-gray-600">billed monthly</p>
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="flex align-middle"></div>
        </div>
      </div>
    </div>
  );
}

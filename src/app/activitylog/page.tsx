"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../_components/Sidebar";
import "@fontsource/inter";
import useGetUserLogs from "@/hooks/logs/useGetUserLogs";

const ActivityPage = () => {
  const [activities, setActivities] = useState<
    { id: number; size:string; info: string; timestamp: string }[]
  >([]);
  const { logs, error, loading } = useGetUserLogs()

  useEffect(() => {
    const mockActivities = [
      {
        id: 1,
        size: "1000kb",
        info: "File Uploaded",
        timestamp: new Date().toLocaleString(),
      },
      {
        id: 2,
        size: "1000kb",
        info: "File Renamed",
        timestamp: new Date().toLocaleString(),
      },
      {
        id: 3,
        size: "1000kb",
        info: "File Deleted",
        timestamp: new Date().toLocaleString(),
      },
    ];
    setActivities(mockActivities);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar folderParentId={""} children={undefined} />
      <div className="container mx-auto px-4" style={{ fontFamily: "Inter" }}>
        <h1 className="text-2xl font-bold my-8">Activity Log</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-b-2 border-indigo-200 border-l-2 border-r-2">
            <thead>
              <tr className="bg-indigo-100 text-left">
                <th className="text-[16px] w-[18%] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Timestamp
                </th>
                <th className="text-[16px] w-[12%] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Type
                </th>
                <th className="text-[16px] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Size
                </th>
                <th className="text-[16px] w-[60%] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {logs?.map((log:any, i:number) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleString('id-ID')}
                  </td>
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {log.type}
                  </td>
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {log.size? log.size : "null"}
                  </td>
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {log.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;

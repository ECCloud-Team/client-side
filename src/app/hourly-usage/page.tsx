"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../_components/Sidebar";
import "@fontsource/inter";
import useGetUserLogs from "@/hooks/logs/useGetUserLogs";
import useGetHourlyUsage from "@/hooks/billing/useGetHourlyUsage";
import useGetTotalBilling from "@/hooks/billing/useGetTotalBilling";

const HourlyUsagePage = () => {
  const { hourlyUsage } = useGetHourlyUsage();
  const { totalBilling } = useGetTotalBilling();

  return (
    <div className="flex min-h-screen">
      <Sidebar folderParentId={""} children={undefined} />
      <div className="container mx-auto px-4" style={{ fontFamily: "Inter" }}>
        <h1 className="text-2xl font-bold my-8">Hourly Usage Log</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-b-2 border-indigo-200 border-l-2 border-r-2">
            <thead>
              <tr className="bg-indigo-100 text-left">
                <th className="text-[16px] w-[18%] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Timestamp
                </th>
                <th className="text-[16px] px-4 py-2 border-2 border-indigo-200 whitespace-nowrap">
                  Max Size Usage
                </th>
              </tr>
            </thead>
            <tbody>
              {hourlyUsage?.map((usage: any, i: number) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {new Date(usage.date).toLocaleString("id-ID")}
                  </td>
                  <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                    {usage.maxUsage} B
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="hover:bg-gray-100">
                <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                  Total
                </td>
                <td className="border px-4 py-0.5 border-indigo-200 border-r-2 whitespace-nowrap">
                  {totalBilling?.totalRecords} B
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
            <p className="mb-2 text-lg font-medium">Total Bill</p>
            <p className="text-2xl font-bold text-gray-800">
              Total Hourly Usage x Plan Price = Total Biling
            </p>
            <p className="text-2xl font-bold text-gray-800">
              {(totalBilling?.totalRecords / (1024 * 1024 * 1024)).toFixed(4)}{" "}
              GB x Rp{totalBilling?.planPrice} = Rp
              {totalBilling?.totalBilling.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyUsagePage;

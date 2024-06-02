"use client";
import React from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Progress, ProgressIndicator } from "@radix-ui/react-progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tracker() {
  const value = 20;
  
  return (
    <div className="">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCloud} className="text-[15px] mr-2 mb-1" />
        <h2 className="flex justify-start text-[15px] font-semibold">Storage</h2>
      </div>
      <Progress value={90} className="w-[188px] h-[6px] bg-gray-300 rounded-lg">
        <ProgressIndicator
          className="bg-blue-500 h-full rounded-lg"
          style={{ width: `${value}%` }}
        />
      </Progress>
      <h2 className="text-[12px] flex justify-start font-normal mt-2">
        2210 KB Used
      </h2>
    </div>
  );
}

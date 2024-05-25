"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { useApp } from "@/context/AppContext";

const Searchbar = () => {
  const router = useRouter();

  const [searchQuery, setsearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { sidebarVisible, setSidebarVisible } = useApp();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="dark:text-gray-800 w-full ">
      <div className="my-6 h-16 items-center px-6 lg:px-12 ">
        <div className="flex space-x-4">
          <div className="relative hidden w-full md:block">
            <input
              type="text"
              placeholder="Search in Fitbox"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/search?q=${searchQuery}`);
                }
              }}
              className="block h-[36px] w-full rounded-3xl border border-gray-300 bg-indigo-50 pl-4 pr-10 text-[12px] text-sm text-gray-900 focus:border-blue-500 focus:ring-red-500"
            />
            <div className="absolute right-2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Searchbar;

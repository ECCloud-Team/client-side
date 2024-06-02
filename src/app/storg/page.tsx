import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import CircularProgress from "../_components/CircularProgress";
import Sidebar from "../_components/Sidebar";
export default function Service() {
  // const [message, setMessage] = useState('');
  // const [usage, setUsage] = useState(0);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //     const storedUserId = localStorage.getItem('userId');
  //     const storedUsage = localStorage.getItem('usage');
  //     if (!storedUserId) {
  //         const newUserId = 'user-' + Math.random().toString(36).substr(2, 9);
  //         localStorage.setItem('userId', newUserId);
  //         setUserId(newUserId);
  //     } else {
  //         setUserId(storedUserId);
  //     }

  //     if (storedUsage) {
  //         setUsage(parseFloat(storedUsage));
  //     }
  // }, []);

  // const stopService = async () => {
  //     try {
  //         const res = await fetch('/api/stop', {
  //             method: 'POST',
  //             body: JSON.stringify({ userId }),
  //             headers: { 'Content-Type': 'application/json' },
  //         });

  //         const data = await res.json();
  //         setMessage(data.message);
  //     } catch (error) {
  //         setMessage('Error stopping service');
  //     }
  // };

  // const terminateService = async () => {
  //     try {
  //         const res = await fetch('/api/terminate', {
  //             method: 'POST',
  //             body: JSON.stringify({ userId }),
  //             headers: { 'Content-Type': 'application/json' },
  //         });

  //         const data = await res.json();
  //         setMessage(data.message);
  //         setUsage(0); // Reset usage
  //         localStorage.setItem('usage', 0); // Update local storage
  //     } catch (error) {
  //         setMessage('Error terminating service');
  //     }
  // };

  // const percentageUsed = (usage / (100 * 1024 * 1024 * 1024)) * 100;

  return (
    <div className="flex align-middle">
      <Sidebar folderParentId={""} children={undefined} />
      <div className="flex min-h-screen p-6 w-full">
        <div className="w-full h-fit p-6 mx-auto ">
          <h1 className="mb-4 text-2xl font-bold">Storage Service</h1>
          <div className="flex flex-col items-center mb-6">
            <div className="w-full p-4 mb-4 rounded-lg bg-blue-50">
              <div className="mb-4 text-center">
                <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                  Simulate File Upload
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="mb-2 text-lg font-bold">Your Storage</p>
                <div className="flex justify-center"> </div>
                <p>
                  {(1000 / (1024 * 1024 * 1024)).toFixed(2)} GB are used out of
                  100 GB
                </p>
                <p>{100 - (1000 / (1024 * 1024 * 1024)).toFixed(2)} % left</p>
              </div>
            </div>
            <div className="mx-2">
              <button className="px-4 py-2 mx-2 mt-4 text-white bg-yellow-500 rounded">
                Stop Service
              </button>
              <button className="px-4 py-2 mx-2 mt-4 text-white bg-red-500 rounded">
                Terminate Service
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
            <div className="flex justify-around">
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Free</h3>
                <p className="mb-1 text-xl">Rp 0 / DAY</p>
                <p className="mb-2 text-sm text-gray-600">billed annually</p>
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Buy now
                </button>
              </div>
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Premium</h3>
                <p className="mb-1 text-xl">Rp 20 / DAY</p>
                <p className="mb-2 text-sm text-gray-600">billed annually</p>
                <button className="px-4 py-2 text-white bg-green-500 rounded">
                  Buy now
                </button>
              </div>
              <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">Diamond</h3>
                <p className="mb-1 text-xl">Rp 30 / DAY</p>
                <p className="mb-2 text-sm text-gray-600">billed annually</p>
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

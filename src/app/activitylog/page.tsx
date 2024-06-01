"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../_components/Sidebar';
import '@fontsource/inter';

const ActivityPage = () => {
const [activities, setActivities] = useState<{ id: number; info: string; timestamp: string; }[]>([]);

useEffect(() => {
    const mockActivities = [
        { id: 1, info: 'File Uploaded', timestamp: new Date().toLocaleString() },
        { id: 2, info: 'File Renamed', timestamp: new Date().toLocaleString() },
        { id: 3, info: 'File Deleted', timestamp: new Date().toLocaleString() },
    ];
    setActivities(mockActivities);
}, []);

  return (
    <div className='flex h-screen'>
      <Sidebar />
        <div className="container mx-auto px-4" style={{fontFamily:'Inter'}}>
          <h1 className="text-2xl font-bold my-8">Activity Log</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-b-2 border-indigo-200 border-l-2 border-r-2">
              <thead>
                <tr className="bg-indigo-100 text-left">
                  <th className="text-[16px] w-1/3 px-4 py-2 border-2 border-indigo-200">Timestamp</th>
                  <th className="text-[16px] px-4 py-2 border-2 border-indigo-200">Info</th>
                  <th className='text-[16px] px-4 py-2 border-2 border-indigo-200'>IP</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2 border-indigo-200 border-r-2 ">{activity.timestamp}</td>
                    <td className="border px-4 py-2 border-indigo-200 border-r-2">{activity.info}</td>
                    <td className="border px-4 py-2 border-indigo-200 border-r-2">{activity.id}</td>
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
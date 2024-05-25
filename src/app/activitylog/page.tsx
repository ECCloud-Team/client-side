"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../_components/Sidebar';

const ActivityPage = () => {
const [activities, setActivities] = useState<{ id: number; action: string; timestamp: string; }[]>([]);

useEffect(() => {
    // Simulating fetching activities from an API or database
    const mockActivities = [
        { id: 1, action: 'File Uploaded', timestamp: new Date().toLocaleString() },
        { id: 2, action: 'File Renamed', timestamp: new Date().toLocaleString() },
        { id: 3, action: 'File Deleted', timestamp: new Date().toLocaleString() },
    ];
    setActivities(mockActivities);
}, []);

  return (
    <div className='flex'>
      <Sidebar />
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold my-8">Activity Log</h1>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-b-2 border-indigo-200 border-l-2 border-r-2">
              <thead>
                <tr className="bg-indigo-100 ">
                  <th className="text-[16px] px-4 py-2 border-2 border-indigo-200">Action</th>
                  <th className="text-[16px] px-4 py-2 border-2 border-indigo-200">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2 border-indigo-200 border-r-2">{activity.action}</td>
                    <td className="border px-4 py-2 border-indigo-200">{activity.timestamp}</td>
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
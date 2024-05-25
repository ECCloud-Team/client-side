"use client";
import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Activity Log</h1>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.action}</td>
              <td>{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityPage;
'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Billing() {
    const [bill, setBill] = useState(0);
    const [totalStorage, setTotalStorage] = useState(0);
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            setMessage('User ID not found. Please upload files first.');
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
        <div className="min-h-screen p-6 bg-gray-100">
            <Head>
                <title>Billing</title>
            </Head>
            <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-bold">Billing</h1>
                <div className="flex flex-col items-center mb-6">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                                <p className="mb-2 text-lg font-medium">Name</p>
                                <p className="text-xl font-bold text-gray-800">{userName}</p>
                            </div>
                            <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                                <p className="mb-2 text-lg font-medium">Total Storage Used</p>
                                <p className="text-xl font-bold text-gray-800">{(totalStorage / (1024 * 1024 * 1024)).toFixed(2)} GB</p>
                            </div>
                            <div className="w-full p-4 mb-4 text-center bg-gray-100 rounded-lg">
                                <p className="mb-2 text-lg font-medium">Total Bill</p>
                                <p className="text-2xl font-bold text-gray-800">Rp. {bill.toFixed(2)}</p>
                            </div>
                            {message && <p className="mt-4 text-gray-700">{message}</p>}
                            {error && <p className="mt-4 text-red-500">Error: {error}</p>}
                            <Link href="/">
                                <a className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">Back to Home</a>
                            </Link>
                            <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded">Make Payment</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

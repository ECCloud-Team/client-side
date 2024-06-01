import { NextApiRequest, NextApiResponse } from 'next';

import mongoose from 'mongoose';
import moment from 'moment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDB();

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { userId } = req.query;

    if (!userId || typeof userId !== 'string') {
        console.error('Missing or invalid userId:', { userId });
        return res.status(400).json({ message: 'Missing or invalid userId' });
    }

    try {
        const { db } = mongoose.connection;

        // Get the user's first upload date
        const user = await db.collection('users').findOne({ userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const firstUploadDate = moment(user.firstUploadDate);
        const today = moment();
        const daysSinceFirstUpload = today.diff(firstUploadDate, 'days');

        // Get daily usage records for the past 30 days where usage exceeded 1 GB
        const dailyUsageRecords = await db.collection('dailyUsage').find({
            userId,
            date: { $gte: moment().subtract(30, 'days').format('YYYY-MM-DD') },
            usage: { $gt: 1 * 1024 * 1024 * 1024 }
        }).toArray();

        // Calculate total usage and billing, subtracting 1 GB per applicable day
        const totalUsage = dailyUsageRecords.reduce((total, record) => total + record.usage, 0);
        const usageAboveThreshold = totalUsage - (1 * 1024 * 1024 * 1024 * dailyUsageRecords.length);
        const totalBill = usageAboveThreshold / (1024 * 1024 * 1024); // Assuming the bill is per GB

        res.status(200).json({ totalUsage, totalBill, daysSinceFirstUpload, userName: user.name });
    } catch (error) {
        console.error('Billing API error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

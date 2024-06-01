import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '@/utils/db';
import mongoose from 'mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDB();

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { userId } = req.body;

    if (!userId || typeof userId !== 'string') {
        console.error('Missing or invalid userId:', { userId });
        return res.status(400).json({ message: 'Missing or invalid userId' });
    }

    try {
        const { db } = mongoose.connection;

        // Mark service as stopped and log it
        await db.collection('logs').insertOne({ userId, action: 'stop', timestamp: new Date() });

        res.status(200).json({ message: 'Service stopped successfully' });
    } catch (error) {
        console.error('Stop Service API error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

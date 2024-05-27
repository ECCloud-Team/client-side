// import type { ObjectId } from 'mongodb';

export interface File {
  _id: string;
  user_id: string;
  filename: string;
  path: string;
  size: number;
  folder_id: string | null;
  uploadDate: Date;
    __v: number;
};

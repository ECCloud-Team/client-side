// import type { ObjectId } from 'mongodb';

export interface File {
  _id: String;
  user_id: string;
  filename: string;
  path: string;
  size: number;
  folder_id: String | null;
  uploadDate: Date;
    __v: number;
};

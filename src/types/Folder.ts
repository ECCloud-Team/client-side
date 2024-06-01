// import { ObjectId } from 'mongodb';
export type Folder = {
  _id: string;
  user_id: string;
  name: string;
  parent_id: string | null;
  createdDate: Date;
    __v: number;
};

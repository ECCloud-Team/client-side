// import { ObjectId } from 'mongodb';
export type Folder = {
  _id: String;
  user_id: string;
  name: string;
  parent_id: String | null;
  createdDate: Date;
    __v: number;
};

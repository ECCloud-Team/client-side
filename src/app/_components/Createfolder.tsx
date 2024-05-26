'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faTimes } from '@fortawesome/free-solid-svg-icons';

const CreateFolderModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [folderName,setFolderName]=useState('');
    const onCreate = () => {
        console.log('Folder Name:', folderName);
        setFolderName('');
        onClose();
    }
    const handleCreateFolder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lakukan tindakan untuk membuat folder baru di sini
        console.log('Folder Name:', folderName);
        // Reset nilai input setelah membuat folder
        setFolderName('');
        // Tutup modal setelah proses pembuatan folder selesai
        onClose();
    };
    
if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold" style={{fontFamily: 'Inter'}}>Create New Folder</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-[30px]"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form onSubmit={handleCreateFolder}>
                <input
                    type="text"
                    placeholder="Folder Name"
                    className="p-2 border-[1px] outline-none
                            rounded-md w-full mb-3 text-[15px]"
                    style={{ fontFamily: 'Inter' }}
                            onChange={(e)=>setFolderName(e.target.value)}
                />
                <button className="bg-blue-500
                text-white rounded-md p-2 px-3 w-full text-[15px]"
                style={{fontFamily: 'Inter'}}
                onClick={()=>onCreate()}
                >Create</button>
            </form>
            </div>
        </div>
      );
    }

    export default CreateFolderModal;
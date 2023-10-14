'use client'
import React from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const Modal = ({ isOpen, onClose, position} : any) => {

    const firebaseConfig = {
        apiKey: "AIzaSyCL_8BJnJPtCd09ziz4ljp1E9-1Mt5jLJM",
        authDomain: "machinelearningfplpoints.firebaseapp.com",
        projectId: "machinelearningfplpoints",
        storageBucket: "machinelearningfplpoints.appspot.com",
        messagingSenderId: "50057788929",
        appId: "1:50057788929:web:70053070639236dc378a00",
        measurementId: "G-V94F7Q5M1G"
      };
      const app = initializeApp(firebaseConfig);

      const getData = () =>{
        console.log("Hello world")
      }

  if (!isOpen) return null;
  const playerData = [
    { name: 'Test Player 1', stats: 'Test Stats 1' },
    { name: 'Test Player 2', stats: 'Test Stats 2' },
    { name: 'test Player 3', stats: 'Test Stats 3' },
  ];


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <span
            onClick={onClose}
            className="modal-close cursor-pointer absolute top-0 right-0 p-4">
            Close
          </span>

         <div>
            <h2 className="text-lg text-black font-semibold mb-2">Player Data</h2>
            <ul>
              {playerData.map((player, index) => (
                <li className='text-black border border-b-black mb-2' key={index}>{player.name}: {player.stats} : {position}</li>
              ))}
            </ul>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Modal;

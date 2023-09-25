
'use client'
import React, { useState } from 'react';

export default function NavBar2() {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    {
      label: 'Status',
    },
    {
      label: 'Points',
    },

    {
        label: 'Pick Team'
    },
    {
        label:'Drafts'
    },
    {
        label:'Team'
    },
    {
        label:'Transfers'
    },
    {
        label: 'League & Cup'
    },
    {
        label:'Fixtures'
    },
    {
        label:'The Scouts'
    },
    {
        label:'Podcasts'
    },
    {
        label:'Scouts'
    }
  ];

  const handleMouseEnter = (buttonLabel: any) => {
    setActiveButton(buttonLabel);
  };



  return (
    <nav className="flex sticky w-screen mt-8">
      <div className="relative text-left flex-1 flex justify-left mr-auto ml-14">
        {buttons.map((button, index) => (
          <div key={index} className="relative">
            <button
              className={`text-sm py-2 px-4 rounded font-mono bg-green-600 ml-4 ${activeButton === button.label ? 'bg-white text-black' : 'bg-green-600 text-white'} `}
              onClick={()=> handleMouseEnter(button.label)}
            >
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}

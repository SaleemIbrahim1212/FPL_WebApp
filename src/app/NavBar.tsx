'use client'
import React, { useState } from 'react';

export default function NavBar() {
  const [activeButton, setActiveButton] = useState(null);

  const buttons = [
    {
      label: 'Premier League',
      menuItems: ['Fpl Site', 'Fixtures', 'Upcoming Fixtures'],
    },
    {
      label: 'Fantasy Premier League',
      menuItems: ['Predict', 'News', 'Podcasts'],
    },
  ];

  const handleMouseEnter = (buttonLabel: any) => {
    setActiveButton(buttonLabel);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };

  const handleListMouseLeave = () => {
    setActiveButton(null);
  };

  return (
    <nav className="flex sticky w-screen mt-8">
      <div className="relative text-left flex-1 flex justify-left mr-auto ml-14">
        {buttons.map((button, index) => (
          <div key={index} className="relative">
            <button
              className="text-white font-bold font-mono py-2 px-4 rounded"
              onMouseEnter={() => handleMouseEnter(button.label)}
              onMouseLeave={handleMouseLeave}
            >
              {button.label}
            </button>
            <ul
              className={`absolute grid grid-cols-2 py-2 px-5 bg-purple-700 border border-gray-300 rounded transition-opacity ease-in-out delay-150 duration-500 ${
                activeButton === button.label ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
              onMouseEnter={() => handleMouseEnter(button.label)} 
              onMouseLeave={handleListMouseLeave} 
            >
              {button.menuItems.map((item, i) => (
                <li key={i} className="text-white text-xs py-2 px-2">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

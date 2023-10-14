'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import empty_shirt from '../../public/assests/empty_shirt.webp'
import Modal from './Modal'; // Import the Modal component
import { useState } from 'react'

export default function Teamboard() {
    const keeper = (new Array(1) as any[]).fill(empty_shirt)
    const defenders = (new Array(4) as any[]).fill(empty_shirt)
    const midfielders = (new Array(3) as any[]).fill(empty_shirt)
    const forwards  = (new Array(3) as any[]).fill(empty_shirt)
    const bench  = (new Array(3) as any[]).fill(empty_shirt)

    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [selectedPosition, setSelectedPosition] = useState<String>('');

    const handlePlayerClick = (pos: String ) => {
        setSelectedPosition(pos)
        setIsModalOpen(true); 
      };

    return (

        <div> 

        <div id="control_bar" className= "justify-between flex"> 

        <button> 
            <svg 
            onClick={() => {alert("Back")}} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="purple" 
            className="w-6 h-6">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
    </svg>
</button>
            <h3 className='text-black'> Gameweek 4 </h3>


<button> 
            <svg 
            onClick={() => {alert("Forward")}} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="purple" 
            className="w-6 h-6">
  <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
</svg>
            
</button>      
        </div>
        <div className="flex flex-col h-screen bg-green-800  border-gray-800 border-8 bg-cover rounded-md my-8 ">
                <div className="flex items-center justify-center flex-wrap">
                {keeper.map((player, i) => (
                    <img
                        src={player.src}
                        key={i}
                        alt={`Defender ${i}`}
                        className=" w-1/4 max-w-[200px] px-10"
                        onClick={() => handlePlayerClick('GK')}

                        // Adjust the width, max-width, and other styles as needed
                    />
                ))}
            </div>
            <div className="flex justify-between mt-auto flex-wrap">
                {defenders.map((player, i) => (
                    <img
                        src={player.src}
                        key={i}
                        alt={`Defender ${i}`}
                        className=" w-1/4 max-w-[200px] px-10"
                        onClick={() => handlePlayerClick('DEF')}

                        // Adjust the width, max-width, and other styles as needed
                    />
                ))}
            </div>

            <div className="flex justify-between mt-auto flex-wrap">
                {midfielders.map((player, i) => (
                    <img
                        src={player.src}
                        key={i}
                        alt={`Defender ${i}`}
                        className=" w-1/4 max-w-[200px] px-10"
                        onClick={() => handlePlayerClick('MID')}

                        // Adjust the width, max-width, and other styles as needed
                    />
                ))}
            </div>


            <div className="flex justify-between mt-auto py-6 flex-wrap">
                {forwards.map((player, i) => (
                    <img
                        src={player.src}
                        key={i}
                        alt={`Defender ${i}`}
                        className=" w-1/4 max-w-[200px] px-10"
                        onClick={() => handlePlayerClick('FWD')}

                    />
                ))}
            </div>
            <div className="flex justify-between mt-auto py-6 bg-blue-500 rounded-lg flex-wrap">
                {bench.map((player, i) => (
                    <img
                        src={player.src}
                        key={i}
                        alt={`Bench ${i}`}
                        className=" w-1/4 max-w-[200px] px-10"
                        onClick={() => handlePlayerClick('BENCH')}
                    />
                ))}
            </div>
            <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position =  {selectedPosition}
        
      />
        </div>
        </div>
    )
}

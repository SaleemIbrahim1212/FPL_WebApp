'use client'
import React, { useEffect } from 'react';

export default function LatestNews(props: any) {


  return (
    <div className='flex items-center bg-white w-48 ml-20'>
      <div id="picture" className=''>
        <img
          height={80}
          width={80}
          src={"qwsdqw"}
          alt='Picture'
        />
      </div>

      <div className='ml-2'>
        <a href={'newsUrl'} className='text-black font-bold underline'>
          {'news title'}
        </a>
        {/* Add more text content here if needed */}
      </div>
    </div>
  );
  }

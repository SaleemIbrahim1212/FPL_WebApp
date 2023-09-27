'use client'
import React, { useState } from 'react';

export default function LiveRank() {
  // Initialize a state variable to store the input value
  const [fplId, setFplId] = useState('');
  const [fplData, setFplData] = useState<any>(null);; 

  const submitForm =  async () => {
    console.log('FPL ID:', fplId);
    const playerData = await getFplInfo(fplId);
    setFplData(playerData)


  };

  const handleInputChange = (event : any) => {

    if (event.target.value.trim() == '' )
    {
        setFplData(null)
    }
    setFplId(event.target.value);
  };

  async function getFplInfo(id : String){
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/entry/${id}/`);
    const data = await response.json();  
    data.leagues.classic= data.leagues.classic.filter((item: { id: any }) => item.id == 314);
    console.log(data.leagues.classic)
    return data;

  }

  return (
    <div className='bg-white h-fit rounded-md w-fit flex flex-col pu-2 pb-4 border border-black pl-3'>
      <h3 className=' text-gray-500 font-mono font-bold p-3'>Fpl Live Rank</h3>
      <h3 className='text-gray-300 px-3'> FPL ID </h3>

      <div className='flex justify-between'>
        <input
          type="text"
          className="border rounded-lg ml-3 py-2 text-black px-3"
          id="form_submit"
          value={fplId}
          onChange={handleInputChange} // Handle input changes
        />
            <button
            className={`${fplId === '' ? 'bg-gray-500' : 'bg-blue-500'} text-white px-7 py-2 ml-1 rounded-lg`}
            onClick={submitForm}
            >
            GO
            </button>

      </div>


     {fplData && fplId && 
     
     <div id='CardRank' className="ml-4 mr-4 "> 

     <div className="flex justify-between">
       <div> 
           <h5 className=" text-gray-600"> GW Points </h5>
           <p className=" text-gray-800"> {fplData.summary_event_points} </p> 
     
       </div>
     
       <div> 
           <h5 className=" text-gray-700"> Rank Change</h5>
           <p className= {` ${fplData.leagues.classic[0].entry_last_rank > fplData.leagues.classic[0].entry_rank ? "bg-green-300" : "bg-red-500"} px-3 rounded-lg text-black`}>{
           (fplData.leagues.classic[0].entry_last_rank- fplData.leagues.classic[0].entry_rank).toLocaleString("en-US")} </p>
       </div>
       
     </div>
     
     <div> 
       <h5 className=" text-gray-700" > Live Rank </h5>
       <p className="text-black"> {
       (fplData.leagues.classic[0].entry_rank).toLocaleString("en-US")} </p>
     </div>
     
     </div>
     } 
      

      </div>

  );
}


export default function LiveRank() {
  return (
<div className='bg-white h-auto rounded-md w-1/4 flex flex-col pu-2 pb-4 border border-black '>
  <h3 className=' text-gray-500 font-mono font-bold p-3'>Fpl Live Rank</h3>
  <h3 className='text-gray-300 px-3'> FPL ID </h3>

  <div className='justify-start items-center'> 
    <input type="text" className="border rounded-lg ml-3 py-2 text-black px-3"/>
    <button className='bg-blue-500 text-white px-7 py-2 ml-1 rounded-lg '> GO </button>
  </div>

  <div id='CardRank' className="ml-4 mr-4"> 

  <div className="flex justify-between">
    <div> 
        <h5 className=" text-gray-600"> GW Points </h5>
        <p className=" text-gray-800"> 78 </p> 

    </div>

    <div> 
        <h5 className=" text-gray-700"> Rank Change</h5>
        <p className="bg-green-500 px-3 rounded-lg text-gray-800"> + 200000</p>
    </div>
    
  </div>

  <div> 
    <h5 className=" text-gray-700" > Live Rank </h5>
    <p className="text-black"> 102,000</p>
  </div>

  </div>


</div>


  );
}

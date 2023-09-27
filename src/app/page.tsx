import Image from 'next/image'
import fs from 'fs'
import NavBar from './NavBar'
import NavBar2 from './NavBar2';
import LiveRank from './LiveRank';
import LatestNews from './LatestNews';
import Teamboard from './Teamboard';
export default function Home() {
  const folderPath = './public/Prem-Logos/';
  const imageFiles = fs.readdirSync(folderPath);
  return (

    
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden h-full">
          <div id= 'top-header' className='bg-white w-full flex flex-wrap h-20 pl-28'>
          <span className='text-black p-4 flex flex-wrap items-center ml-6'>
                    Club Links
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
          </span>

    {
                    imageFiles.map((file) => (
                          <div className=' flex ml-auto my-auto mr-5 hover:scale-125 transition-all duration-500 cursor-pointer' key={file}>
                            <Image width= {35} height = {35} src={`/Prem-Logos/${file}`} alt={file + ' logo'} />
                          </div>
                  ))}            
 
          </div>
          <Image className='object-cover absolute z-0 top-12 left-4' width= {90} height = {100} src={`/assests/prem-main-logo.png`} alt='Prem Main Logo'/>
          <div className=' bg-purple-700 w-full flex flex-wrap h-16'> 
          <div className='justify-center ml-20'> 
                <NavBar/>
                </div>
          </div>

          <div id= 'top-header' className=' bg-white w-full flex h-28 '>
                      <LatestNews/>

          </div>

          <div id='banner' className="flex  items-end align-bottom bg-[url('/assests/prem-main-lg.png')] bg-cover h-64"> 

              <NavBar2/>
          </div> 


          <div className='flex flex-row mt-10 ml-6'>
            <div className='flex mr-11'>
              <LiveRank/>
            </div>
            <div className='flex w-fit h-auto'>
              <Teamboard/>
            </div>
            <div className='flex '>
              <LiveRank/>
            </div>

          </div>
    </main>
  )
}

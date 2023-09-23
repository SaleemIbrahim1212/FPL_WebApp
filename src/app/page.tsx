import Image from 'next/image'
import fs from 'fs'
export default function Home() {
  const folderPath = './public/Prem-Logos/';
  const imageFiles = fs.readdirSync(folderPath);
  return (

    
    <main className="flex min-h-screen flex-col">

          <div id= 'top-header' className='bg-white w-full flex flex-wrap h-20 pl-28'>
          <span className='text-black p-4 flex flex-wrap items-center ml-6'>
                    Club Links
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
          </span>

    {
                    imageFiles.map((file) => (
                          <div className='m-auto hover:scale-125 transition-all duration-500 cursor-pointer' key={file}>
                            <Image width= {35} height = {35} src={`/Prem-Logos/${file}`} alt={file} />
                          </div>
                  ))}            

          </div>
          <Image className='object-cover absolute z-0 top-12 left-4' width= {80} height = {80} src={`/assests/prem-main-logo.png`} alt='Prem Main Logo'/>
          <div className=' bg-purple-700 w-full flex flex-wrap h-16'> 
              <nav> </nav>
          </div>

          <div id= 'top-header' className='h-20 bg-white w-full'>
            <h1> This is the third heading </h1> 
          </div>
    </main>
  )
}

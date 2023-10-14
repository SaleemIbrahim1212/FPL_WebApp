import React, { useEffect } from 'react';

async function getNews(topic: any ) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?q=premier league&apiKey=88deb36ba891466a9b3d43cba0e62d66`,{ next: { revalidate: 3600 } });
  const data = await response.json();  
  return data;
}

function get_reading_time_avg(article_text : String){

  const charCountMatch = article_text.match(/\[\+(\d+) chars\]/);

  const charCount = 0; 
  if (charCountMatch) {
    const charCount = parseInt(charCountMatch[1], 10);
    const newText = article_text.replace(charCountMatch[0], '');
    const words = newText.split(/\s+/);
    const numberOfWords = words.length;
    const resultText =  numberOfWords + charCount
    const time_to_read  = Math.ceil(resultText/863)
    console.log(time_to_read)
    return time_to_read
  } 
  const words = article_text.split(/\s+/);
  const numberOfWords = words.length;
  const resultText =  numberOfWords + charCount
  

  return resultText









}

export default async function LatestNews(topic : any ) {
  const news = await getNews(topic);
  console.log(news.articles.content)

  return (
  
    <div className='flex justify-between mt-5'>
      {news.articles.slice(0,4).map((article: any, index: any) => (

        <div key={index} className='w-auto justify-between flex hover:scale-125 transition-all duration-500 cursor-pointer ml-4 mr-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          <a href={article.url} className='text-black font-bold justify-stretch text-xs' target='_blank'>
            {article.title}
            
          </a>
          <p className=' self-center text-black text-xs pl-3'> {get_reading_time_avg(article.content)} minutes</p>

        </div>


      ))}
    </div>
  );
}

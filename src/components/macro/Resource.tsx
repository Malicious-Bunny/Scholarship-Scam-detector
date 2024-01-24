"use server"
import * as cheerio from 'cheerio';
import Image from 'next/image'

async function getMetadata(url: string) {

            const axios = require('axios');
try{
            const {data} = await axios.get(url);

            let title : string | undefined = ''
            let description : string | undefined = ''  
            let imageUrl : string | undefined = ''

       
            const $ = cheerio.load(data);
            title = $('meta[property="og:title"]').attr('content') || $('title').text();
            description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content');
            imageUrl = $('meta[property="og:image"]').attr('content');

           
           if(description && imageUrl){
            return {description, imageUrl};
           }else{
            description = ""
            imageUrl = ""

            return {description, imageUrl};
           }
          }
            catch(e){
                
            }
                
            
            
      
        
}

export default async function Resource({title,url}:{title:string,url:string}){

  
    //const {description,imageUrl} = await getMetadata(url);


   
    return (
        <div className="resources  flex self-start flex-col content-center">
        <div className="resource flex flex-col gap-4 lg:gap-2">
    
        <a href={url} className="scroll-m-20 content-center gap-1 flex flex-row text-blue-600 underline underline-offset-4 text-2xl text-start font-semibold tracking-tight">
      {title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hidden lg:block self-center">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>

    </a>
      

      <Image
        src={""}
        alt="Picture of the author"
        width={500}
        height={200}
        />
        <div className='descro '>
            <p className=' font-thin text-primary'>{""}</p> </div>
        </div>
    </div>
    )
}
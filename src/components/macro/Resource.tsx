"use server"
import Image from 'next/image'


export default async function Resource({title,url,imageUrl, description}:{title:string,url:string, imageUrl:string,description:string}){

  
   // const {description,imageUrl} = await getMetadata(url);


   
    return (
        <div className="resources  flex self-start flex-col content-center">
        <div className="resource flex flex-col gap-4 lg:gap-2">
    
        <a href={url} className="scroll-m-20 content-center gap-1 flex flex-row text-blue-600 underline underline-offset-4 text-2xl text-start font-semibold tracking-tight">
      {title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hidden lg:block self-center">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>

    </a>
      

      <img
        src={imageUrl}
        alt="Picture of the author"
        width={1500}
        height={500}
        />
        <div className='descro '>
            <p className=' font-thin text-primary'>{description}</p> </div>
        </div>
    </div>
    )
}
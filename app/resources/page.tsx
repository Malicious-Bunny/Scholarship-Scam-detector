'use server'
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import Image from 'next/image';
import { Suspense } from 'react';

import * as cheerio from 'cheerio';
import Resource from '@/components/macro/Resource';
import { ResourceSkeleton } from '@/components/macro/Skeletons';
import resourceList,{LegitSites} from '@/lib/resourcelist';
import axios from 'axios';
//import cache function 

function GetMetaDataFromHtml(html : any){
  const $ = cheerio.load(html);
  const title = $('title').text();
  const description = $('meta[name="description"]').attr('content');
  const image = $('meta[property="og:image"]').attr('content');
  return {title,description,image}
}

export default async function Page(){

    return (
        <main className=" p-3 w-full h-full flex flex-col items-center justify-center ">
       <div className="w-full lg:w-[60vw] gap-12 lg:gap-16  flex p-4 flex-col items-center content-center">
       <div className="">
     <Breadcrumb aria-label="Links">
      <BreadcrumbItem href="/">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/resources">Resources</BreadcrumbItem>
    </Breadcrumb>
                </div>
    
     

    <h1 className="scroll-m-20 pb-2 text-3xl lg:text-5xl font-semibold tracking-tight first:mt-0">
    Curated resource list we used to fine tune our AI and more
    </h1>
    <div className="legit sites self-start flex flex-col justify-start content-start gap-8">
    <h2 className="scroll-m-20 pb-2 text-start self-start text-2xl lg:text-3xl mb-4 font-semibold tracking-tight first:mt-0">Trusted and safe sites</h2>
  
      {
        LegitSites.map((site, index)=>{
          return <Resource key={index}  title={site.title} url={site.url} imageUrl={site.imageUrl} description={site.description} />
        })
      }
 
  
  
  
    </div>
    <div className="scams self-start flex flex-col justify-start content-start gap-8">
      <h2 className="scroll-m-20 pb-2 text-start self-start text-2xl lg:text-3xl mb-4 font-semibold tracking-tight first:mt-0">How to spot scams</h2>
      
      {
        resourceList.map((site, index)=>{
          return <Resource key={index}  title={site.title} url={site.url} imageUrl={site.imageUrl} description={site.description} />
        })
      }
          
    </div>
       
    
       </div>
        </main>
    )
}
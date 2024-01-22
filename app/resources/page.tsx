import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import Image from 'next/image';
import { Suspense } from 'react';

import Resource from '@/components/macro/Resource';
import { ResourceSkeleton } from '@/components/macro/Skeletons';
import resourceList from '@/lib/resourcelist';


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
        
        {
            resourceList.map((resource,index) => {
                return (
                    <Suspense key={index+2} fallback={<ResourceSkeleton/>}>
                    <Resource key={index} title={resource.title} url={resource.url}/>
                    </Suspense>
                )
            })
        }
       
    
       </div>
        </main>
    )
}

import Image from "next/image";

interface ResourceProps {
    title: string;
    link: string;
    description: string;

}

export  default async function Resource(){
    return (
        <div className="resources  flex self-start flex-col content-center">
        <div className="resource flex flex-col gap-12">
    
        <h3 className="scroll-m-20 text-blue-600 underline underline-offset-4 text-2xl text-start font-semibold tracking-tight">
      The Joke Tax
    </h3>
      

      <Image
       src='/next.svg'
         alt='Next UI'
            width={500}
            height={500}
        className=''
        />
        <div className='descro '>
            <p className=' font-thin text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque atque ex iusto, facilis quas laborum minima? Nostrum aliquam vel ipsa quaerat saepe, numquam labore necessitatibus, deleniti vero at laudantium.</p> </div>
        </div>
    </div>
    )
}
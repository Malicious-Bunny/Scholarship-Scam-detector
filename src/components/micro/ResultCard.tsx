import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import {CircularProgress} from "@nextui-org/react";
import TypewriterEffect from "@/components/micro/TypewritterEffect";

import { useFormStatus } from "react-dom";

interface Resultprops{
    percentage: string ;
    description: string ;
   
}
export default function ResultCard({percentage, description}:Resultprops){
    const {pending} = useFormStatus();
    return (
        <div className=" w-full lg:w-[70%]">
        <Card className=" w-full ">
          <CardHeader>
          <CardTitle className=" text-2xl font-bold">
              Results</CardTitle>
          </CardHeader>
         <CardContent className="flex  flex-col gap-8 mt-4 justify-center content-center">
        { /* <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Enter a link to see results
</p> */}    { pending == false?
            <div className="flex w-full h-full  flex-col gap-8 mt-4 justify-center content-center">
                <CircularProgress
                className="self-center"
                          classNames={{
                          svg: "w-32 h-32 drop-shadow-md",
                          value: "text-3xl font-semibold dark:text-white text-black",
                        }}
                  aria-label="Loading..."
                  value={0}
                  color="success"
                
                  showValueLabel={true}
                />
                <TypewriterEffect text={description} speed={70} />
            </div>
            : 
                <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
           Fetching results...
</p>}
            
        </CardContent>
       
    
          <CardFooter></CardFooter>
        </Card>
      </div>
    )
}
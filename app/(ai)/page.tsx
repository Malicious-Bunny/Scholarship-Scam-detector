

import { Button } from "@/components/ui/button"
import { TestAI } from "@/actions/testAPI"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { SiOpenai } from "react-icons/si";

export  default async function Page(){
  return (
    <main className=" w-full  flex flex-col items-center justify-center content-center">
      <div  className="w-full items-center flex flex-col justify-center content-center dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 self-center p-7 lg:p-9 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500">
        <span className="font-bold gap-1 flex flex-row justify-center items-center text-lg text-white">Powered by openai <SiOpenai className="w-5 h-5"/> </span>
      </div>
      <div className=" w-full lg:w-[80vw] mt-10 gap-16 flex p-4 flex-col items-center content-center h-screen">
       <div className="w-full mt-6 lg:mt-12 lg:w-[70%]">
       <Card className=" w-full ">
      <CardHeader>
        <CardTitle>Paste the link in this input box</CardTitle>
        <CardDescription>Copy the link from the address bar, where you found the offer</CardDescription>
      </CardHeader>
      <CardContent className="grid mt-4 gap-4">
        
       <Input className=" h-12" placeholder="https://www.example.com/scholarshipoffer101" />
      </CardContent>
      <CardFooter className=" mt-4">
        <Button>Evaluate</Button>
      </CardFooter>
    </Card>
       </div>
       <div className=" w-full lg:w-[70%]">
       <Card className=" w-full ">
      <CardHeader>
        <CardTitle>Results</CardTitle>
       </CardHeader>
      <CardContent className="grid gap-4">
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        Enter a link to see results
    </p>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
       </div>
      </div>

    </main>
  )
}
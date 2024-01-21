

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


export  default async function Page(){
  return (
    <main className=" w-screen flex flex-row justify-center">
      <div className=" w-full lg:w-[80vw] gap-16 flex p-4 flex-col items-center content-center h-screen">
       <div className="w-full mt-14 lg:w-[70%]">
       <Card className=" w-full ">
      <CardHeader>
        <CardTitle>Paste the link in this input box</CardTitle>
        <CardDescription>Copy the link from the address bar, where you found the offer</CardDescription>
      </CardHeader>
      <CardContent className="grid mt-6 gap-4">
        
       <Input className=" h-12" placeholder="https://www.example.com/scholarshipoffer101" />
      </CardContent>
      <CardFooter className=" mt-6">
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
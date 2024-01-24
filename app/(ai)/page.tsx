'use client'
import { Button } from "@/components/ui/button";
import { TestAI } from "@/actions/testAPI";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SiOpenai } from "react-icons/si";
import {CircularProgress} from "@nextui-org/react";
import TypewriterEffect from "@/components/micro/TypewritterEffect";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

export default function Page() {

  const Pending = useFormStatus();
  
  
  return (
    <main className=" w-full  flex flex-col items-center justify-center content-center">
      <div className="w-full items-center flex flex-col justify-center content-center dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 self-center p-7 lg:p-9 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500">
        <span className="font-bold gap-1 flex flex-row justify-center items-center text-lg text-white">
          Powered by openai <SiOpenai className="w-5 h-5" />{" "}
        </span>
      </div>
      <div className=" w-full lg:w-[80vw] mt-6 gap-16 flex p-4 flex-col items-center content-center h-screen">
        <div className="w-full mt-6 lg:mt-12 lg:w-[70%]">
          <Card className=" w-full ">
            <form action={TestAI}>
              <CardHeader>
                <CardTitle className=" text-2xl font-bold">
                  Paste the link in this input box
                </CardTitle>
                <CardDescription>
                  Copy the link from the address bar, where you found the offer
                </CardDescription>
              </CardHeader>
              <CardContent className="grid mt-4 gap-4">
               
               {/*create an input component linked to the button for form submission*/ }
                <Input
                  type="text"
                  placeholder="https://www.example.com"
                  name="link"
                  required
                  className="w-full"
                />

                </CardContent>
              <CardFooter className=" mt-4">
                <Button type="submit">Evaluate</Button>
              </CardFooter>
            </form>
          </Card>
        </div>



        <div className=" w-full lg:w-[70%]">
          <Card className=" w-full ">
            <CardHeader>
            <CardTitle className=" text-2xl font-bold">
                Results</CardTitle>
            </CardHeader>
          { Pending && <CardContent className="flex  flex-col gap-8 mt-4 justify-center content-center">
          { /* <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              Enter a link to see results
</p> */}    
              <CircularProgress
              className="self-center"
                        classNames={{
                        svg: "w-32 h-32 drop-shadow-md",
                        value: "text-3xl font-semibold dark:text-white text-black",
                      }}
                aria-label="Loading..."
                value={80}
                color="success"
                
                showValueLabel={true}
              />

              <TypewriterEffect text="Scams are bad scams are bad your scam is bad its really bad really really bad bad bad bad bad bad bad bad Scams are bad scams are bad your scam is bad its really bad really really bad bad bad bad bad bad bad bad Scams are bad scams are bad your scam is bad its really bad really really bad bad bad bad bad bad bad bad bad" speed={70} />
          </CardContent>}
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

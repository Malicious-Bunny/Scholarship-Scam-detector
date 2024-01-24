"use client";
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
import { useState } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import ResultCard from "@/components/micro/ResultCard";
import {CircularProgress} from "@nextui-org/react";

export default function Page() {
  interface initialState {
    description: string;
    link: string;
    errors : string;
  }

  const initial: initialState = {
    description: "",
    link: "",
    errors : ""
  };

  const { pending } = useFormStatus();
  const [state, payload] = useFormState(TestAI, initial);
  const [edit, setEdit]  = useState<string>("");

  return (
    <main className=" w-full  flex flex-col items-center justify-center content-center">
      <div className="w-full items-center flex flex-col justify-center content-center dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 self-center p-7 lg:p-9 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500">
        <span className="font-bold gap-1 flex flex-row justify-center items-center text-lg text-white">
          Powered by openai <SiOpenai className="w-5 h-5" />{" "}
        </span>
      </div>
      <form action={payload}>
        <div className=" w-full lg:w-[80vw] mt-6 gap-16 flex p-4 flex-col items-center content-center h-screen">
          <div className="w-full mt-6 lg:mt-12 lg:w-[70%]">
            <Card className=" w-full ">
              <CardHeader>
                <CardTitle className=" text-2xl font-bold">
                  Paste the link in this input box 
                </CardTitle>
                <CardDescription>
                  Copy the link from the address bar, where you found the offer
                </CardDescription>
              </CardHeader>
              <CardContent className="grid mt-4 gap-4">
                {/*create an input component linked to the button for form submission*/}
                <Input
                  type="text"
                  value={edit}
                  onChange={
                    (e)=>{
                      setEdit(e.target.value)
                    }
                  }
                  placeholder="https://www.example.com"
                  name="link"
                  className="w-full"
                />
                 {state?.errors && <p  className="leading-7 text-danger">
                    Please enter a valid link
                 </p>}
              </CardContent>

              <CardFooter className=" mt-4">
                <SubmitButton state={edit} />
              </CardFooter>
            </Card>
          </div>
          <ResultCard
            percentage={
              state?.link ??
              "Enter a link to see results. "
            }
            description={
              state?.link ??
              "Enter a link to see results. "
            }
          />
        </div>
      </form>
    </main>
  );
}

function SubmitButton({state}:{state:string}) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={
      state.length<1? true:false
    } type="submit">
      Evaluate {pending == true &&  <CircularProgress className="ml-2 mr-1" classNames={
        { svg: "w-3 h-3 drop-shadow-md",
         indicator: "stroke-white",
         track: "stroke-black"}
      }  color="default" aria-label="Loading..."/>}
    </Button>
  );
}

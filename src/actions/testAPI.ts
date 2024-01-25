'use server'
import { revalidatePath } from "next/cache";
import OpenAI from "openai";
import LinkValidator from "@/lib/linkValidator";


type FormState = {
    description: string;
  }



export async function TestAI(previousState : any,formdata : FormData) {

    const APiKEY = process.env.OPENAI_API_KEY;

    const openai = new OpenAI({apiKey: APiKEY});


    try{
       /* const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "How would I go about fine tuning a LLM" }],
            model: "gpt-3.5-turbo-1106",
          });*/
          //await 7 seconds to test hookform 
            await new Promise(r => setTimeout(r, 1000));
          //logging the input value from the form data

          const Data = formdata.get("link")?.toString()
            console.log(Data)

           if(!LinkValidator(Data)){
                revalidatePath('/')
                return {
                errors: "Invalid Link"
           }}

            revalidatePath('/')
            return {
              percent : 60,
            description : "Testing your scam, gullible fool",
            link: Data,
        };
    }
    catch(e){
        console.log(e)
        revalidatePath('/')
        return {
          percent : 0,
        description : "Error in testing your scam, gullible fool",
        link: "Error",
        errors: "Error"
    };


    }


}
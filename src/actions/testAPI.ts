'use server'
import Router from "next/router";
import OpenAI from "openai";



export async function TestAI(formdata : FormData) {

    const APiKEY = process.env.OPENAI_API_KEY;

    const openai = new OpenAI({apiKey: APiKEY});
    try{
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "How would I go about fine tuning a LLM" }],
            model: "gpt-3.5-turbo-1106",
          });
          //logging the input value from the form data
            console.log(formdata.get("link"))
    }
    catch(e){
        console.log(e)
    }


}
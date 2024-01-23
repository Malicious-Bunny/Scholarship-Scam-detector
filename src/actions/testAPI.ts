'use server'
import Router from "next/router";
import OpenAI from "openai";



export async function TestAI() {

    const APiKEY = process.env.OPENAI_API_KEY;

    const openai = new OpenAI({apiKey: APiKEY});
    try{
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "How would I go about fine tuning a LLM" }],
            model: "gpt-4",
          });
          console.log(completion.choices[0].message.content);
    }
    catch(e){
        console.log(e)
    }


}
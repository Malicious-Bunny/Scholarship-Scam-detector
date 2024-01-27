'use server'
import { revalidatePath } from "next/cache";
import OpenAI from "openai";
import LinkValidator from "@/lib/linkValidator";
import axios from "axios";
import cheerio from "cheerio";

export async function TestAI(previousState : any,formdata : FormData) {
    function MatchNo(message:string|null){
       const regex =  /^(no)$/i;

        if(message == null){
          return false}
        else{
          return regex.test(message)
        }
    }
    interface Response{
      percentage : number;
      redflags: string[];
      advice: string[];
     }
    async function scrapeForScamDetection(url:string) {
      try {
          // Fetch the HTML of the page
          const { data } = await axios.get(url);
          const $ = cheerio.load(data);
  
          // Define an array to hold the relevant text content
          let relevantText :any= [];
  
          // Extract text from relevant tags
          $('h1, h2, h3, h4, h5, h6, p, ul, ol').each((i, element) => {
              const text = $(element).text().trim();
              if (text) {
                  relevantText.push(text);
              }
          });
  
          // Join the extracted text content
          const bodyText = relevantText.join(' ');
  
          // Extract all hyperlinks
          const links : any = [];
          $('a').each((i, element) => {
              const link = $(element).attr('href');
              if (link) {
                  links.push(link);
              }
          });
  
          // Extract website metadata
          const title = $('title').text();
          const metaDescription = $('meta[name="description"]').attr('content') || '';
          const metaKeywords = $('meta[name="keywords"]').attr('content') || '';
  
          const responseOBJ = {
            url,
            title,
            metaDescription,
            metaKeywords,
            bodyText,
            links
        };

        return JSON.stringify(responseOBJ)
      } catch (error) {
          console.error(`Error scraping ${url}: `, error);
          const responseOBJ = {
        };
          return JSON.stringify(responseOBJ)
      }
  }
    const APiKEY = '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'
    const openai = new OpenAI({apiKey: APiKEY });
    const system : string = "You are a scholarship in link detector. You consume links and return a yes or no based on whether or not the link has something to do with scholarships. Do just that. Respond with nothing but yes or no"
    const RealSystem : string =
     `As an AI developed to assess the authenticity of websites for scam detection, I calculate the authenticity percentage based on specific criteria. The system assigns up to 10 red flag points based on the severity of issues identified in the website data:

    - Big issues like non-secure links or soliciting payments are allocated 7 points.
    - Mild issues like insufficient scholarship information are allocated 3-4 points.
    - Small issues like outdated UI or non-semantic HTML practices are allocated 1-2 points.
    
    The maximum score a website can achieve is 9.9 points to ensure that a 100% authenticity rating is unattainable. The authenticity percentage is calculated as 100 minus the proportion of red flag points to the maximum score(100), allowing for decimal values. When provided with website data, including hyperlinks, body text, and metadata, I analyze it and return the calculated authenticity percentage along with identified red flags and advice in a JSON format.
    The JSON format should be like this:
    {
      percentage : //authenticity percentage,
      redflags: //array of red flags,
      advice: //array of advice to the user looking for a scholarship on that site, advice can be trusted sites to look for scholarships, or how to identify a scam site like fastweb.com, scholarships.com, etc.
    }. 
    Respond with the JSON. and nothing but the JSON response
    `
    try{
       const Data = formdata.get("link")?.toString()
        const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: system },
                    {role: "assistant", content: Data}
              ],
                model: "gpt-3.5-turbo-16k-0613",
              });
      

         const message =  completion.choices[0].message.content;

          if(MatchNo(message)){

            revalidatePath('/')
            return {
              percent : 0,
            description : "Hmm, seems like this link does not lead to a scholarship offer", 
            link: Data,}

           }else{
            if(Data){
              const data = await scrapeForScamDetection(Data)
              const secondCompletion = await openai.chat.completions.create({
                messages: [{ role: "system", content: RealSystem },
                    {role: "assistant", content: data}
              ],
                model: "gpt-3.5-turbo-16k-0613",
              });

             const SecondMessage =  secondCompletion.choices[0].message.content;
             let  messageJson : Response = {
                percentage : 0,
                redflags: [],
                advice: [],
             }
             if(SecondMessage){
              messageJson = JSON.parse(SecondMessage)
             }
              revalidatePath('/')
              return {
                percent : messageJson.percentage,
              description : messageJson.redflags.join(', '),
              advice: messageJson.advice.join(', '),
              link: Data,
        };
            
            }
             
      
      }
    }
    catch(e){
      console.log(e)

        revalidatePath('/')
        return {
          percent : 0,
          description : "Oop, seems like something went wrong",
          advice: "",
          link: "Error",
          errors: "Error"
    };


    }


}
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default async function Page(){

    return (
        <main className=" p-3 w-full h-full flex flex-col items-center justify-center ">
         <div className="w-full lg:w-[60vw] gap-12 lg:gap-16  flex p-4 flex-col items-center content-center">
         <div className="">
     <Breadcrumb aria-label="Links">
      <BreadcrumbItem href="/">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/faq">FAQ</BreadcrumbItem>
    </Breadcrumb>
                </div>
        
                <h1 className="scroll-m-20 pb-2 md:text-4xl text-2xl lg:text-5xl font-semibold tracking-tight first:mt-0">
   Frequently Asked Questions
    </h1>
    <Accordion className='w-full md:mt-9 mt-2 lg:mt-12' type="multiple" >
  <AccordionItem value="question">
    <AccordionTrigger className='text-lg lg:text-2xl text-bold'>What is scam detector AI?</AccordionTrigger>
    <AccordionContent className="text-md lg:text-xl">
      A:It is an AI based on a fine tuned gpt-3-1106 model. Trained using data from scam scholarship sites
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="question-2">
    <AccordionTrigger className='text-lg lg:text-2xl text-bold'>Why do we need a link?</AccordionTrigger>
    <AccordionContent className="text-md lg:text-xl">
    A:The link helps our bot crawl the scholarship site and pass on the data to our AI for evaluation
     </AccordionContent>
  </AccordionItem>
  <AccordionItem value="question-3">
    <AccordionTrigger className='text-lg lg:text-2xl text-start text-ellipsis  text-bold'>What  red flags does the AI look out for?</AccordionTrigger>
    <AccordionContent className="text-md lg:text-xl">
   A:The AI examines several indicators, including the sites security status, domain legitimacy (.org, for example), the appearance of the website (dated UI), outdated copyright information, and the presence of fees for applying to scholarships. It also flags unsolicited offers and recommends contacting organizations directly for verification.  </AccordionContent>
  </AccordionItem>
  <AccordionItem value="question-4">
    <AccordionTrigger className='text-lg lg:text-2xl text-start text-ellipsis text-bold'>Is the AI detector foolproof, and can it guarantee 100% accuracy?</AccordionTrigger>
    <AccordionContent className="text-md lg:text-xl">
    A: While our AI scam detector is powerful and effective, no system can guarantee 100% accuracy. It provides a probability of legitimacy based on identified red flags. Users are encouraged to use the results as a guideline and exercise caution. If in doubt, additional verification measures, such as contacting the organization directly, are recommended. </AccordionContent>
  </AccordionItem>
  <AccordionItem value="question-5">
    <AccordionTrigger className='text-lg lg:text-2xl text-start text-ellipsis  text-bold'>How frequently is the AI model updated to adapt to new scam tactics?</AccordionTrigger>
    <AccordionContent className="text-md lg:text-xl">
    A: We regularly update our AI model to stay ahead of emerging scam tactics. Our team monitors the evolving landscape of online scams and incorporates new patterns and red flags into the detection algorithms. Users can expect continuous improvements to enhance the accuracy of the scam detection system.</AccordionContent>
  </AccordionItem>
</Accordion>
        </div>
        </main>
    )
}
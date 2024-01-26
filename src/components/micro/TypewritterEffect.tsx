import React, { useEffect, useState } from 'react';

interface TypeWriterProps{
  
    text:string,
    speed:number
}


export default function TypewriterEffect({ text, speed = 50 }:TypeWriterProps){
  const [displayedText, setDisplayedText] = useState('');
  let index = 0;

  if(text.length < 1){
    text = "None"
  }
 
  useEffect(() => {
    
   
    const intervalId = setInterval(() => {
      
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
       
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [index,text, speed]);

  return (
    <span className="text-primary will-change-scroll font-normal text-lg lg:text-xl">
      {displayedText}
       </span>
  );
};
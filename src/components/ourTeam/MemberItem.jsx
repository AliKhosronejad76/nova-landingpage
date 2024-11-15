"use client";
import { useState } from "react";
import Image from "next/image";


export default function MemberItem({
    jobTitle,
    name , 
    img
   }){
   const [hover , setHover]= useState();

   return(
       <div className={`w-[48%] mb-10 bg-red-100 `}>  
           <div className="relative">
               <Image 
                   src={img}
                   width={700}
                   height={700}
                   className=" object-cover relative h-[550px]"
               /> 
               <OverlyOption hover={hover} setHover={setHover} />
           </div>
        
           <div>
               <p>{name}</p>
               <p>{jobTitle}</p>
           </div>

       </div>
   );
}


function OverlyOption(){
    return(
        <div className={`transition duration-500 absolute bg-overly bottom-0 left-0 right-0 top-[100px] flex items-end pb-8`}>
             1111111111111111111           
        </div>
    );
}
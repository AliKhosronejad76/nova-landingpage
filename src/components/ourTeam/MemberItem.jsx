"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from  "framer-motion"; 
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";




export default function MemberItem({
    jobTitle,
    name , 
    img ,
    ref ,
    inView,
    delay , 
   }){
   const [hover , setHover]= useState();

   return(
       <motion.div 
        initial={{y: 10 , opacity: 0}}
        animate={inView ? {y:0 , opacity:1}:{}}
        transition={{delay:delay , duration : 0.7}}
        ref={ref} 
        className={`w-full md:w-[48%] mb-10 bg-red-100 `}
       >  
           <div className="relative">
               <Image 
                   src={img}
                   width={700}
                   height={700}
                   alt="memberitem"
                   className="w-full object-cover relative h-[550px]"
               /> 
               <OverlyOption hover={hover} setHover={setHover} />
           </div>
        
           <div>
               <p>{name}</p>
               <p>{jobTitle}</p>
           </div>

       </motion.div>
   );
}


function OverlyOption(){
    const [hover , setHover] = useState(false);
    
    return(
        <div 
           onMouseEnter={()=>setHover(true)}
           onMouseLeave={()=>setHover(false)} 
           className={`${hover ? "translate-y-0 opacity-1":"-tranlate-y-10 opacity-0"} transition duration-500 absolute bg-overly bottom-0 left-0 right-0 top-[100px] flex items-end justify-center pb-8`}
           >
            <div className="w-[70%] gap-3 text-gray-700 mx-auto flex items-center justify-center">
                <Item href="/" icon={<FaLinkedin/>}/>
                <Item href="/" icon={<AiFillInstagram/>}/>
                <Item href="/" icon={<FaTwitter />}/>
                <Item href="/" icon={<FaFacebookF/>}/>
            </div>
        </div>
    );
}
function Item({icon , href }){
    return(
        <Link 
            className="w-12 h-12 text-3xl shadow-3xl rounded-full flex items-center justify-center bg-white text-gray-700" 
            href={href}
        >
            {icon}
        </Link>
    );
}
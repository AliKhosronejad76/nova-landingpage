"use client";
import Image from "next/image";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Customers(){
    const [ref , inView] = useInView();
    console.log(useInView)

    return(
        <motion.section 
         ref={ref} 
         initial={{y:10 , opacity:0}}
         animate={inView ? {y:0 , opacity:1} : {} }
         transition={{duration:0.7 , delay:0.7}}
         className="bg-white w-full flex items-center px-5 py-9">
            <Image 
                src="/img/1.svg"
                className="w-full h-[200px]"
                width={200}
                height={200}
            />
        </motion.section>
    );
}


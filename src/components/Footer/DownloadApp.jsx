"use client";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TfiApple } from "react-icons/tfi";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DownloadApp(){
    const [ref , inView] = useInView({triggerOnce:true});
    
    return(
        <motion.div
           
          ref={ref}
          initial={{y:10 , opacity:0}}
          animate={inView ? {y:0 , opacity:1} : {}}
          transition={{duration:0.8 , delay:1.2}}
          className="flex flex-col gap-8 w-full md:w-[48%] lg:w-[23%] ">
            <h3 className="text-2xl yekanbakhFat">دانلود برنامه </h3>
            <div className="flex flex-col gap-4">
                <DownloadBox href="/" icon={<TfiApple/>} marketName="AppleStore"/>
                <DownloadBox href="/" icon={<IoLogoGooglePlaystore/>} marketName="PlayStore"/>
            </div>
        </motion.div>
    )
}

function DownloadBox({ href , icon , marketName }){
    return(
        <Link 
            href={href}
            className="flex items-center gap-4 w-full bg-white shadow-lg py-4 px-2 rounded-xl "
        >
            <div className="text-4xl">
                {icon}
            </div>
            <div className="flex flex-col ">
                <span className="mb-2 yekanbakhBold">دانلود از</span>
                <span className="yekanbakhLight">َ{marketName}</span>
            </div>
        </Link>
    );
}
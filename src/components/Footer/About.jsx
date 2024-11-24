"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function About(){
    const [ref , inView] = useInView({triggerOnce:true});

    return(
        <motion.div 
         ref={ref}
         initial={{y:10 , opacity:0}}
         animate={inView ? {y:0 , opacity:1} : {}}
         transition={{duration:0.8 , delay:0.5}}
         className="w-full md:w-[48%] lg:w-[29%] flex flex-col gap-8">
            <Image 
                width={300}
                height={300}
                className={"w-[200px]"}
                alt="logo"
                src="/img/logo.svg"
            />
            <div>
                <p className="text-sm leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </div>

            <div className="flex items-center gap-2">
                <Icon icon={<FaLinkedin/>}/>
                <Icon icon={<AiFillInstagram/>}/>
                <Icon icon={<FaTwitter/>}/>
                <Icon icon={<FaFacebookF/>}/>
            </div>
        </motion.div>
    );
}

function Icon({icon}){
    return(
        <Link href="/" className="bg-[#2f80ed] opacity-50 w-12 h-12 rounded-full flex items-center justify-center  text-white text-3xl transition duration-300 hover:opacity-100">
            {icon}
        </Link>
    );
}
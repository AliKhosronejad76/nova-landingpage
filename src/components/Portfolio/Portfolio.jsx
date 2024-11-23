"use client";
import { motion  } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import { useNav } from "@/context/NavContextProvider";

export default function Portfolio(){
    const {portfolio} = useNav();

    return(
        <section ref={portfolio} className="py-24  px-10 sm:px-20 sm:pb-48 md:pb-20 bg-white h-full" >
           <h1 className="text-4xl text-center lgtext-6xl yekanbakhFat my-5 text-gray-600">نمونه کار ها</h1>
            <div className="flex flex-col md:flex-row gap-20 sm:gap-44 md:flex-wrap md:gap-3 md:justify-between h-full">
                <Item link="/" img="/img/port1.jpg"/>
                <Item link="/" img="/img/port3.jpg"/>
                <Item link="/" img="/img/port2.jpg"/>
                <Item link="/" img="/img/port4.jpg"/>
                <Item link="/" img="/img/port5.jpg"/>
                <Item link="/" img="/img/port6.jpg"/>
            </div>
            
        </section>
    );
}

function Item({img , link}){
    return(
        <article className="w-full md:w-[48%] lg:w-[32%] mb-44 relative h-auto  bg-transparent">
           <header className="w-full h-[320px] sm:h-[450px]">
             <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full absolute h-full"
                />
                <motion.div 
                    initial={{y:8 , opacity:0}}
                    whileHover={{y:0 , opacity:1}}
                    transtion={{duration:1}}
                    className={`flex items-center justify-center w-full h-full absolute z-50 top-0 right-0 left-0 bottom-0 bg-[rgba(47,128,237,0.3)]`}
                >
                    <Link href={link} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-700 text-2xl">
                        <FiLink/>
                    </Link>
                 </motion.div>
           </header>
           
            <footer className="h-[180px] w-[90%] py-3 px-3 rounded-xl absolute bg-white shadow-md right-0 top-48 sm:top-96 mb-30 flex flex-col justify-center gap-5 z-[70]">
                <h1 className="yekanbakhBold text-xl">توسعه گرافیکی</h1>

                <p className="text-sm leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </footer>
            
        </article>
    );
}
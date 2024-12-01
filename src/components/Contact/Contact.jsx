"use client";

import Form from "./Form"; 
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import InfoItem from "./InfoItem";
import { useNav } from "@/context/NavContextProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact(){
    const {contact} = useNav();
    const [ref1 , inView1] = useInView({triggerOnce:true});
    const [ref2 , inView2] = useInView({triggerOnce:true});
    const [ref3 , inView3] = useInView({triggerOnce:true});

    return(
        <section ref={contact} className="text-gray-600 bg-[#f3f3f3] py-24 pb-8 px-8 min-h-full h-max">
            <motion.h1 
                ref={ref1}
                initial={{y:10 , opacity:0}}
                animate={inView1 ? {y:0 , opacity:1} : {}}
                transition={{delay:0.5 , duration:0.5}}
                className="text-center text-4xl yekanbakhFat my-5 ">با ما تماس بگیرید</motion.h1>
            <motion.p 
                ref={ref2}
                initial={{y:10 , opacity:0}}
                animate={inView2 ? {y:0 , opacity:1} : {}}
                transition={{delay:0.5 , duration:0.5}}
                className="my-4 text-sm text-center  yekanbakhLight">با ما در وقت و هزینه خود صرفه جویی کنید موفقیت در انتظار شماست</motion.p>
       
            <motion.div
                ref={ref3}
                initial={{y:10 , opacity:0}}
                animate={inView3 ? {y:0 , opacity:1} : {}}
                transition={{delay:0.8 , duration:0.5}} 
                 className="h-full w-full flex flex-col lg:flex-row">
                <Form />
                <div className="h-full w-full lg:w-[33%] flex flex-col justify-start gap-6 px-3 py-3 ">
                    <InfoItem 
                        info2={"+004389478327"}
                        info1={"0045939863784"} 
                        icon={<LuPhone/>}
                     />
                    <InfoItem 
                     icon={<MdOutlineMailOutline/>} 
                     info1={"yourmail@gmail.com"}
                     info2={"admin@yourwebsite.com"}
                    />
         
                    <InfoItem 
                      icon={<IoLocationOutline/>} 
                      info1={"میدان آرژانتین، خیابان احمدقصیر (بخارست)، خیابان سیزدهم، پلاک ۱۱ - کدپستی: ۱۵۱۳۸۱۶۳۰۰"}
                    />

                </div>
            </motion.div>


        </section>
    );
}
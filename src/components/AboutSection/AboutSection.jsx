"use client";
import Image from "next/image";
import { useNav } from "@/context/NavContextProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { mergeRefs } from "@/mergeRefs";
import { GiDuration } from "react-icons/gi";

export default function AboutSection(){
    const {about} = useNav();
    const [ref1 , inView] = useInView({triggerOnce:true});     
    return(
        <section ref={mergeRefs(about , ref1 )} className="px-5 sm:px-20 py-28 flex flex-col lg:flex-row gap-3 bg-[#e5e5e5]">
            <motion.div 
              initial={{y:20 , opacity:0}}
              animate={inView ? {y:0 , opacity:1}:{}}
              transition={{delay:0.6 , duration:0.8}} 
              className="minh-full max-h-auto w-full flex items-center lg:w-[50%] order-2">
                <Image 
                    src="img/about-img.svg"
                    width={500}
                    height={500}
                    className="w-full p-2"
                    alt="about"
                />
            </motion.div>

            <div className="w-full lg:w-[50%] flex flex-col gap-10 order-1">
                <motion.h1
                 initial={{y:10 , opacity:0}}
                 animate={inView ? {y:0 , opacity:1}:{}}
                 transition={{delay:0.4 , duration:0.8}} 
                 className="text-4xl md:text-5xl yekanbakhFat text-gray-700"
                >
                آینده طراحی از اینجا شروع می شود
                </motion.h1>

                <motion.p
                 initial={{y:10 , opacity:0}}
                 animate={inView ? {y:0 , opacity:1}:{}}
                 transition={{delay:0.8 , duration:0.8}} 
                className="yekanbakhLight text-sm leading-relaxed mb-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  
                </motion.p>

                <motion.ul
                   initial={{y:10 , opacity:0}}
                   animate={inView ? {y:0 , opacity:1}:{}}
                   transition={{delay:0.8 , duration:0.8}}  
                 className="flex flex-col gap-6">
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    
                </motion.ul>
                <div className="w-full flex justify-start py-4 px-3">
                    <motion.button 
                      initial={{y:10 , opacity:0}}
                      animate={inView ? {y:0 , opacity:1}:{}}
                      transition={{delay:1.5 , duration:0.8}} 
                     className="bg-[#2f80ed] w-[100px]  h-[50px] lgw-[130px] lgh-[58px] rounded-xl text-white text-sm lgtext-lg yekanbakhLight">
                        بیشتر
                    </motion.button>
                </div>
               
            </div>
        </section>
    );
}
function Item({text}){
    return(
        <li className="text-sm leading-relaxed">
            <div>

            </div>
            <p>
                {text}
            </p>
        </li>
    );
}
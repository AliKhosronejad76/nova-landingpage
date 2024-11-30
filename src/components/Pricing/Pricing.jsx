"use client";
import {useRef} from "react";
import { useNav } from "@/context/NavContextProvider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "./Slider";
import { delay, motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

export default function Pricing(){
    const {pricing} = useNav();
    const [ ref1 , InView1]  = useInView({triggerOnce:true});
    const [ ref2 , InView2]  = useInView({triggerOnce:true}); 
    const sliderRef = useRef(null);
    const switcher = (data)=>{
        console.log({ data , sliderRef })
       if(sliderRef.current){
           const width = sliderRef.current.offsetWidth ; 
           sliderRef.current.scrollTo(sliderRef.current.scrollLeft+width*data , 0)
       }
    }
    return(
        <section ref={pricing} className="bg-[#f3f3f3] clear-both py-24 px-8 flex flex-col lg:flex-row lg:justify-center lg:items-start h-full lg:h-screen">
            <motion.div 
             ref={ref1}
             initial={{x:14 , opacity:0}}
             animate={InView1 ? {x:0  , opacity:1}:{}}
             transition={{duration:0.8 , delay:0.7}}
             className="w-full lg:w-[49%] h-full flex flex-col justify-center gap-10">
                    <div className="flex flex-col gap-7">
                        <h1 className="text-4xl lg:text-5xl yekanbakhFat text-gray-800 px-4">جدول قیمت ها</h1>

                        <p className="leading-loose text-sm py-3 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>

                        <div className="flex w-full items-center justify-center my-9">
                            <Button onClick={()=>switcher(-1)} icon={<IoIosArrowForward/>}/>
                            <Button onClick={()=>switcher(1)} icon={<IoIosArrowBack/>} />
                        </div>
                    </div>
            </motion.div>
            <motion.div 
             ref={ref2}
             initial={{x:-14 , opacity:0}}
             animate={InView2 ? {x:0  , opacity:1}:{}}
             transition={{duration:0.8 , delay:1.3}}
            className="w-full lg:w-[49%] flex justify-center h-full">
                <Slider sliderRef={sliderRef}/>
            </motion.div>
        </section>
    )
}

function Button({ onClick , icon }){
    return(
        <button 
            onClick={onClick}
            className="w-16 h-16 rounded-full text-3xl text-gray-700 flex items-center justify-center transition duration-500 hover:text-white hover:bg-sky-500"
        >
            {icon}
        </button>
    )

}
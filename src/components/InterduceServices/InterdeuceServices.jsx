"use client";
import { useEffect, useState } from "react";
import { useNav } from "@/context/NavContextProvider";
import { FaChartLine } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineGraphicEq } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


export default function InterduceServices(){
    const {services , sectionId , setSectionId} = useNav();
    const [containerRef , inViewContainer] = useInView();
    const [ref1 , inView1] = useInView({triggerOnce:true}); 
    const [ref2 , inView2] = useInView({triggerOnce:true}); 
    const [ref3 , inView3] = useInView({triggerOnce:true}); 
    const [ref4 , inView4] = useInView({triggerOnce:true}); 
    const [ref5 , inView5] = useInView({triggerOnce:true}); 
    const [ref6 , inView6] = useInView({triggerOnce:true}); 
    const [ref7 , inView7] = useInView({triggerOnce:true}); 



    return(
        <div ref={containerRef}>

            <section ref={services} className="pt-2 md:pt-20 flex flex-col gap-8">
                <div ref={ref1} >
                    <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={inView1 ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: .5 }}
                        className="text-center text-5xl yekanbakhFat my-5 text-gray-600">خدمات ما
                    </motion.h1>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={inView1 ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: .8 }}
                        className="text-center yekanbakhLight text-sm pb-6">
                        با ما در وقت و هزینه خود صرفه جویی کنید
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-between px-10 sm:px-20">
                    <ServiceItem
                        ref={ref2}
                        inView={inView2}
                        delay={0.5}
                        icon={<FaChartLine />}
                        title={"تحلیل کسب و کار"}
                        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />
                    <ServiceItem
                        ref={ref3}
                        inView={inView3}
                        delay={0.7}
                        icon={<VscSymbolColor />}
                        title={"خدمات چاب"}
                        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />
                    <ServiceItem
                        ref={ref4}
                        inView={inView4}
                        delay={0.9}
                        icon={<MdOutlineGraphicEq />}
                        title={"طراحی گرافیک"}
                        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />

                    <ServiceItem
                        ref={ref5}
                        inView={inView5}
                        delay={0.5}
                        icon={<HiCode />}
                        title={"طراحی وب"}
                        desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />

                    <ServiceItem
                        ref={ref6}
                        inView={inView6}
                        delay={.7}
                        icon={<MdOutlineSecurity />}
                        title={"امنیت"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />

                    <ServiceItem
                        ref={ref7}
                        inView={inView7}
                        delay={.9}
                        icon={<TbDeviceImacCode />}
                        title={"توسعه وب"} desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                    />
                </div>
            </section>
        </div>

    );
}


function ServiceItem({icon , title , desc , ref , inView ,delay}){
    return(
        <motion.div 
         ref={ref}
         initial={{y:20 , opacity:0}}
         animate={inView ? {y: 0 , opacity:1} : {}}
         transition={{duration:1 , delay:delay}}
         className="shadow-[0px_10px_0px_-2px_rgba(0,0,0,0.75)] w-full md:w-[49%] lg:w-[32%] flex flex-col items-center justify-center px-4 gap-7 mb-20  rounded-[40px] h-[350px]"
        >
            <div className="text-7xl text-blue-600 mb-4 ">
                {icon}
            </div>
            <h5 className="yekanbakhMed text-3xl text-gray-700">{title}</h5>

            <div>
                <p className="text-center text-base text-gray-700">{desc}</p>
            </div>
        </motion.div>
    );
}
"use client";
import MemberItem from "./MemberItem";
import { useNav } from "@/context/NavContextProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurTeam(){
    const {ourTeam} = useNav();
    const [ref1,inView1] = useInView({triggerOnce:true});
    const [ref2,inView2] = useInView({triggerOnce:true});

    const [ref3,inView3] = useInView({triggerOnce:true});
    const [ref4,inView4] = useInView({triggerOnce:true});
    const [ref5,inView5] = useInView({triggerOnce:true});
    const [ref6,inView6] = useInView({triggerOnce:true});
   


    return(
        <section ref={ourTeam} className="py-24 pb-8 px-8 bg-[#e5e5e5]">
           <motion.h1 
            ref={ref1}
            initial={{y:10, opacity: 0}}
            animate={inView1 ? {y:0,opacity:1} : {}}
            transition={{duration:0.5 , delay:0.5}}
            className="text-center text-6xl yekanbakhFat my-5 text-gray-600">
            تیم ما
           </motion.h1>
           <motion.h6 
            ref={ref2}
            initial={{y:10 , opacity:0 }}
            animate={inView1 ? {y:0 , opacity:1 } : {}}
            transition={{ duration:0.5 , delay:0.5 }}
            className="text-sm text-center text-gray-600 yekanbakhLight">
                متخصصین ما با شش سال تجربه این افتخار را دارند تا با بروزترین و حرفه‌ای‌ترین متد خدمات متنوعی را برای بهترین بودن به شما ارائه کنند
            </motion.h6>
           <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between mt-7 pt-10 lgpx-12">
                <MemberItem 
                    img="/img/mem1.jpg" 
                    ref={ref3}
                    inView={inView3}
                    delay={0.5}
                />
                <MemberItem 
                    img="/img/mem2.jpg" 
                    ref={ref4}
                    inView={inView4}
                    delay={0.6}
                />
                <MemberItem 
                    img="/img/mem3.jpg" 
                    ref={ref5}
                    inView={inView5}
                    delay={0.5}
                
                />
                <MemberItem 
                    img="/img/mem4.jpg" 
                    ref={ref6}
                    inView={inView6}
                    delay={0.6}
                />

           </div>
        </section>
    );
}

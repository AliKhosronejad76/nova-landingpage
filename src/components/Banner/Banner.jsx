"use client";

import { useEffect  , useState , Fragment } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useNav } from "@/context/NavContextProvider";
import { useInView } from "react-intersection-observer";
import { mergeRefs } from "@/mergeRefs";
import { motion } from "framer-motion";


export default function Banner(){
    const {home  , sectionId , setSectionId} = useNav();
    const [containerRef , inViewContainer] = useInView();
    const [ref1 , inView]  = useInView({triggerOnce:true});
    const [ref2 , inView2]  = useInView({triggerOnce:true});
    const [ref3 , inView3]  = useInView({triggerOnce:true});
    const [ref4 , inView4]  = useInView({triggerOnce:true});

    return(
        <div ref={containerRef}>
            <section
                ref={mergeRefs(home, ref1)}
                style={{ backgroundImage: "url(/img/hero-bg-2.svg)", backgroundRepeat: "no-repeat" }}
                className="h-full lg:h-screen flex flex-col lg:flex-row gap-8 justify-between px-12  sm:px-20 py-20 md:py-32 relative "
            >
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}

                    className="w-full lg:w-[47%] order-2"
                >
                    <Image

                        src="/img/hero-img.svg"
                        width={600}
                        height={600}
                        className="w-full "
                    />
                </motion.div>
                <div className="w-full h-full lg:w-[49%] flex flex-col  gap-8 lgjustify-between order-1">
                    <motion.h1
                        ref={ref2}
                        initial={{ y: 10, opacity: 0 }}
                        animate={inView2 ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: .8, delay: 1 }}
                        className="text-4xl text-justify leading-loose sm:text-5xl md:text-6xl lg:text-5xl yekanbakhFat lg:leading-relaxed md:leading-loose text-gray-600"


                    >
                        خدمات طراحی و توسه پروژه های تحت وب
                    </motion.h1>
                    <motion.p
                        ref={ref3}
                        initial={{ y: 10, opacity: 0 }}
                        transition={{ duration: .8, delay: 1.4 }}
                        animate={inView3 ? { y: 0, opacity: 1 } : {}}
                        className="leading-loose yekanbakhLight text-sm">
                        سوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </motion.p>

                    <motion.button

                        initial={{ y: 10, opacity: 0 }}
                        transition={{ duration: .8, delay: 1.9 }}
                        animate={inView3 ? { y: 0, opacity: 1 } : {}}
                        className="bg-[#2f80ed] flex gap-3 items-center justify-center text-white w-[150px] h-[50px] lgw-[177px]  rounded-[60px]">
                        <FaAngleRight />
                        <span className="yekanbakhBold">انجامش بده</span>
                    </motion.button>
                </div>
            </section>
        </div>

    );
}
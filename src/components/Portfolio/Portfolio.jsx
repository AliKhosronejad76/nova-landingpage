"use client";
import { motion  } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import { useNav } from "@/context/NavContextProvider";
import { useInView } from "react-intersection-observer";



export default function Portfolio(){
    const {portfolio} = useNav();
    const [headerRef , headerInView] = useInView();
    const [ref1 , inView1  ] = useInView({triggerOnce:true});
    const [ref2 , inView2 ] = useInView({triggerOnce:true});
    const [ref3 , inView3 ] = useInView({triggerOnce:true});
    const [ref4 , inView4 ] = useInView({triggerOnce:true});
    const [ref5 , inView5 ] = useInView({triggerOnce:true});
    const [ref6 , inView6 ] = useInView({triggerOnce:true});


    return(
        <section ref={portfolio} className="py-24 lg:py-40 px-10 sm:px-20 sm:pb-48 md:pb-20 bg-white h-full" >
           <motion.h1 
            ref={headerRef}
            initial={{y:20 , opacity:0}}
            animate={headerInView ? {y:0 , opacity:1} : {}}
            transition={{duration:0.5 , delay:0.3}}
            className="text-4xl text-center lg:text-6xl yekanbakhFat mb-10 text-gray-600">نمونه کار ها</motion.h1>
            <div className="flex flex-col md:flex-row gap-20 sm:gap-44 md:flex-wrap md:gap-3 md:justify-between h-full">
                <Item
                    link="/"
                    img="/img/port1.jpg"
                    ref={ref1}
                    inView={inView1}
                    delay={0.6}
                />
                <Item
                    link="/"
                    img="/img/port3.jpg"
                    ref={ref2}
                    inView={inView2}
                    delay={0.8}
                />

                <Item 
                link="/"
                img="/img/port2.jpg"
                ref={ref3}
                inView={inView3}
                delay={1}
                />
                <Item
                    link="/"
                    img="/img/port4.jpg"
                    ref={ref4}
                    inView={inView4}
                    delay={0.6}

                />
                <Item
                    link="/"
                    img="/img/port5.jpg"
                    ref={ref5}
                    inView={inView5}
                    delay={0.8}

                />
                <Item
                    link="/"
                    img="/img/port6.jpg"
                    ref={ref6}
                    inView={inView6}
                    delay={1}
                />
            </div>

        </section>
    );
}

function Item({img , link , ref , inView , delay}){
    return(
        <motion.article 
            ref={ref}
            initial={{ y: 20 , opacity: 0 }}
            animate={inView ?{ y: 0  , opacity: 1 }:{}}
            transition={{delay:delay , duration:0.7}}
            className="w-full md:w-[48%] lg:w-[32%] mb-24 sm:mb-32 lg:mb-44 relative h-auto  bg-transparent">
            <header className="w-full h-[320px] sm:h-[450px]">
                <Image
                    src={img}
                    width={500}
                    height={500}
                    className="w-full absolute h-full"
                />
                <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transtion={{ duration: 1 }}
                    className={`flex items-center justify-center w-full h-full absolute z-50 top-0 right-0 left-0 bottom-0 bg-[rgba(47,128,237,0.3)]`}
                >
                    <Link href={link} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-700 text-2xl">
                        <FiLink />
                    </Link>
                </motion.div>
            </header>

            <footer className="h-[180px] w-[90%] py-3 px-3 rounded-xl absolute bg-white shadow-md right-0 top-48 sm:top-96 mb-30 flex flex-col justify-center gap-5 z-[70]">
                <h1 className="yekanbakhFat md:yekanbakhBold text-2xl md:text-xl">توسعه گرافیکی</h1>

                <p className="text-lg md:text-sm leading-loose">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </footer>

        </motion.article>
    );
}
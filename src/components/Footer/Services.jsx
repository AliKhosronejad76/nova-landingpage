"use client";
import { motion } from "framer-motion";
import ListItem from "./ListItem";
import { useInView } from "react-intersection-observer";


export default function Services(){
    const [ref , inView] = useInView({triggerOnce:true});
    return(
        <motion.div 
        ref={ref}
        initial={{y:10 , opacity:0}}
        animate={inView ? {y:0 , opacity:1} : {}}
        transition={{duration:0.8 , delay:0.9}}

        className="w-full md:w-[48%] lg:w-[21%] flex flex-col gap-8" >
            <h3 className="yekanbakhFat text-2xl">خدمات</h3>
            <ul className="yekahbakhLight">
                <ListItem  href="/" title="طزاحی وب" />
                <ListItem  href="/" title="توسعه وب" />
                <ListItem  href="/" title="خدمات سئو " />
                <ListItem  href="/" title="وبلاگ نویسی" />
            </ul>
        </motion.div>
    );
}
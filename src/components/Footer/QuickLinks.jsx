"use client";
import ListItem from "./ListItem";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function QuickLinks(){
    const [ref , inView] = useInView({triggerOnce:true});
    return(
        <motion.div
            ref={ref}
            initial={{y:10 , opacity:0}}
            animate={inView ? {y:0 , opacity:1} : {}}
            transition={{duration:0.8 , delay:0.7}}
            className="w-full md:w-[48%] lg:w-[24%] flex flex-col gap-8" >
            <h3 className="yekanbakhFat text-4xl md:text-2xl">دسترسی سریع</h3>
            <ul className="yekahbakhLight">
                <ListItem title={"خانه "} href="/"/>
                <ListItem title={"درباره ما"} href="/"/>
                <ListItem title={"خدمات"} href="/"/>
                <ListItem title={"گواهینامه"} href="/"/>
                <ListItem title={"تماس"} href="/"/>

            </ul>
        </motion.div>
    );
}

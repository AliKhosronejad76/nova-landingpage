"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";



export default function ClientComments(){
    const [ref1 , inView1  ] = useInView({triggerOnce:true});
    const [ref2 , inView2 ] = useInView({triggerOnce:true}); 
    const [ref3 , inView3 ] = useInView({triggerOnce:true}); 
    const [ref4 , inView4 ] = useInView({triggerOnce:true}); 

    return(
        <section className="py-14 pb-8 px-10 sm:px-20 lgpx-8 ">
           <motion.h1 
            ref={ref1}
            initial={{y:10 , opacity:0}}
            animate={inView1 ? {y:0 , opacity:1} : {}}
            transition={{delay:0.5 , duration:0.5}}
            className="text-center text-4xl yekanbakhFat my-5 text-gray-600"
            >تجربیات 
            </motion.h1>
            <div className="w-full flex flex-col md:flex-row md:justify-between flex-wrap mt-8">
                <CommentItem 
                    clientName="مریم احدی"
                    jobTitle="تورلیدر"
                    photo="/img/user1.png"
                    ref={ref2}
                    inView={inView2}

                />
                <CommentItem 
                    clientName="شروین احمدی"
                    jobTitle="برنامه نویس سمت کاربر"
                    photo="/img/user2.png"
                    ref={ref3}
                    inView={inView3}
                
                />
                <CommentItem 
                    clientName="علی قاسمی"
                    jobTitle="برنامه نویس"
                    photo="/img/user3.png"
                    ref={ref4}
                    inView={inView4}
                
                />
            </div>
        </section>

    )

}

function CommentItem({clientName , jobTitle , photo , inView , ref}){
    return(
        <motion.div 
        ref={ref}
        initial={{y:14 , opacity:0}}
        animate={inView ? {y:0 , opacity:1} : {}}
        transition={{delay:0.5 , duration:0.8}}

        className="w-full md:w-[48%] flex flex-col items-center gap-5 rounded-xl bg-transparent p-5 mb-6 shadow-xl">
           
            <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full ">
                    <Image 
                        width={300}
                        height={300}
                        className="w-full h-full "
                        src={photo}
                        alt="client"
                    />
                </div>
                <span className="yekanbakhHeavy text-xl">{clientName}</span>
                <span className="text-sm">{jobTitle}</span>
            </div>



        <div>
            <p className=" yekahbakhLight leading-loose text text-justify text-sm mt-8 lg:mt-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، 
            </p>
        </div>

        </motion.div>
    );
}
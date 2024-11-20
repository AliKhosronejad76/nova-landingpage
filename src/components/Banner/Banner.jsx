"use client";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useNav } from "@/context/NavContextProvider";



export default function Banner(){
    const {home} = useNav();
    
    return(
        <section
            ref={home}
            style={{backgroundImage:"url(/img/hero-bg-2.svg)" , backgroundRepeat:"no-repeat" }}
            className="h-full flex flex-col lg:flex-row gap-8 lg:justify-between px-12  sm:px-20 py-32 relative "
        >
              <div className="w-full lg:w-[47%] order-2">
                <Image 
                    src="/img/hero-img.svg"
                    width={600}
                    height={600}
                    className="w-full "
                />
              </div>
              <div className="w-full h-full lg:w-[49%] flex flex-col  gap-8 lgjustify-between order-1">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl yekanbakhFat lg:leading-relaxed md:leading-loose text-gray-600">خدمات طراحی و توسه پروژه های تحت وب</h1>
                    <p className="leading-loose yekanbakhLight text-sm">
                    سوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>

                    <button className="bg-[#2f80ed] flex gap-3 items-center justify-center text-white w-[150px] h-[50px] lgw-[177px]  rounded-[60px]">
                            <FaAngleRight/>
                           <span className="yekanbakhBold">انجامش بده</span>
                    </button>
              </div>
        </section>
    );
}
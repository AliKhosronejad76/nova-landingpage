"use client";
import Image from "next/image";
import { useNav } from "@/context/NavContextProvider";


export default function AboutSection(){
    const {about} = useNav();
    
    return(
        <section ref={about} className="px-5 sm:px-20 py-28 flex flex-col lg:flex-row gap-3 bg-[#e5e5e5]">
            <div className="w-full lg:w-[50%] order-2">
                <Image 
                    src="img/about-img.svg"
                    width={500}
                    height={500}
                    className="w-full p-2"
                    alt="about"
                />
            </div>

            <div className="w-full lg:w-[50%] flex flex-col gap-5 order-1">
                <h1 className="text-4xl md:text-5xl yekanbakhFat text-gray-700">
                آینده طراحی از اینجا شروع می شود
                </h1>

                <p className="yekanbakhLight text-sm leading-relaxed mb-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  
                </p>

                <ul className="flex flex-col gap-6">
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    <Item text=" متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"/>
                    
                </ul>
                <div className="w-full flex justify-start py-4 px-3">
                    <button className="bg-[#2f80ed] w-[100px]  h-[50px] lgw-[130px] lgh-[58px] rounded-xl text-white text-sm lgtext-lg yekanbakhLight">
                        بیشتر
                    </button>
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
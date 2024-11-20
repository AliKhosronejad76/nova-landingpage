"use client";
import { useNav } from "@/context/NavContextProvider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "./Slider";

export default function Pricing(){
    const {pricing} = useNav();
    
    return(
        <section ref={pricing} className="bg-[#f3f3f3] py-24 px-8 flex justify-center items-start h-screen">
            <div className="w-[49%] h-full flex flex-col justify-center gap-10">
                    <div className="flex flex-col gap-7">
                        <h1 className="text-5xl yekanbakhFat text-gray-800 px-4">جدول قیمت ها</h1>

                        <p className="leading-loose text-sm py-3">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>

                        <div className="flex w-full items-center justify-center my-9">
                            <Button icon={<IoIosArrowForward/>}/>
                            <Button icon={<IoIosArrowBack/>} />
                        </div>
                    </div>
            </div>
            <div className="w-[49%] flex justify-center h-full">
                <Slider/>
            </div>
        </section>
    )
}

function Button({ onClick , icon }){
    return(
        <button 
            onClick={onClick}
            className="w-20 h-20 rounded-full text-3xl text-gray-700 flex items-center justify-center transition duration-500 hover:text-white hover:bg-sky-500"
        >
            {icon}
        </button>
    )

}
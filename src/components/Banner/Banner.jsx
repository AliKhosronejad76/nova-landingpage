import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";


export default function Banner(){
    return(
        <section
            style={{backgroundImage:"url(/img/hero-bg-2.svg)"}}
            className="flex justify-between px-9 py-32 relative "
        >
              <div className="w-[47%]">
                <Image 
                    src="/img/hero-img.svg"
                    width={600}
                    height={600}
                    className="w-full "
                />
              </div>
              <div className="w-[49%] flex flex-col justify-between">
                    <h1 className="text-5xl yekanbakhFat leading-relaxed text-gray-800">خدمات طراحی و توسه پروژه های تحت وب</h1>
                    <p className="leading-loose yekanbakhLight text-sm">
                    سوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>

                    <button className="bg-[#2f80ed] flex gap-3 items-center justify-center text-white w-[177px] h-[60px] rounded-[60px]">
                            <FaAngleRight/>
                           <sapn className="yekanbakhBold">انجامش بده</sapn>
                    </button>
              </div>
        </section>
    );
}
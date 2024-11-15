import Form from "./Form"; 
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import InfoItem from "./InfoItem";


export default function Contact(){
    return(
        <section className="text-gray-600 bg-[#f3f3f3] py-14 pb-8 px-8 h-max">
            <h1 className="text-center text-4xl yekanbakhFat my-5 ">با ما تماس بگیرید</h1>
            <p className="my-4 text-sm text-center  yekanbakhLight">با ما در وقت و هزینه خود صرفه جویی کنید موفقیت در انتظار شماست</p>
       
            <div className="w-full flex ">
                <Form />
                <div className="w-[33%] flex flex-col justify-start gap-6 px-3 py-3 ">
                    <InfoItem 
                        info2={"+004389478327"}
                        info1={"0045939863784"} 
                        icon={<LuPhone/>}
                     />
                    <InfoItem 
                     icon={<MdOutlineMailOutline/>} 
                     info1={"yourmail@gmail.com"}
                     info2={"admin@yourwebsite.com"}
                    />
         
                    <InfoItem 
                      icon={<IoLocationOutline/>} 
                      info1={"میدان آرژانتین، خیابان احمدقصیر (بخارست)، خیابان سیزدهم، پلاک ۱۱ - کدپستی: ۱۵۱۳۸۱۶۳۰۰"}
                    />

                </div>
            </div>


        </section>
    );
}
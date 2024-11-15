import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { MdTextFormat } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";

export default function Form(){
    return(
        <form    className="w-[67%] ">
            <div className="w-full flex flex-wrap justify-between py-3">
                <Input icon={<AiOutlineUser/>} placeholder={"نام"} value={""}/>
                <Input icon={<LuPhone/>} placeholder={"شماره تلفن"} value={""}/>
                <Input icon={<MdOutlineMailOutline/>} placeholder={"ایمیل"} value={""}/>
                <Input icon={<MdTextFormat/>} placeholder={"موضوع"} value={""}/>
            </div>
            <div className="w-full ">
               <Message/>
            </div>
            <div className="my-6">
                <button className="bg-[#2f80ed] text-xl text-white px-5 py-3 rounded-md flex items-center justify-center gap-4">
                    <FaTelegramPlane/>
                    <span>ارسال</span>
                </button>
            </div>
        </form>
    );
}

function Input({icon , value , placeholder , }){
    return(
        <div className="w-[48%] bg-white rounded-md  flex items-center text-gray-700 mb- mb-5 shadow-lg">
            <div className="w-[10%] flex items-center justify-center text-xl text-gray-500" >
                {icon}
            </div>
            <input 
             type="text"
             value={value}
             placeholder={placeholder}
             className="w-[90%] px-2 bg-transparent outline-none h-[55px] "
             />
        </div>
    )
}

function Message(){
    return(
        <div className="w-full bg-white shadow-lg flex items-start py-5 px-2 rounded-xl ">
            <div className="text-2xl">
             <TbMessage2/>
            </div>
            <textarea
                row="6"
                resize="none" 
                type="text"
                placeholder="درخواست ..."
                className="w-full px-2 resize-none outline-none h-[120px]"    
            />

        </div>

    );
}
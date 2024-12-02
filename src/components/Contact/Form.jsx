"use client";

import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { MdTextFormat } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";

export default function Form(){
    const [name , setName] =   useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [subject , setSubject] = useState("");
    const [comment , setComment] = useState("");

    return(
        <form    className="w-full lgw-[67%] ">
            <div className="w-full flex flex-wrap justify-between py-3">
                <Input icon={<AiOutlineUser/>} placeholder={"نام"} value={name}  setValue={setName} />
                <Input icon={<LuPhone/>} placeholder={"شماره تلفن"} value={phone}  setValue={setPhone} />
                <Input icon={<MdOutlineMailOutline/>} placeholder={"ایمیل"} value={email}  setValue={setEmail} />
                <Input icon={<MdTextFormat/>} placeholder={"موضوع"} value={subject}  setValue={setSubject} />
            </div>
            <div className="w-full ">
               <Message value={comment} setValue={setComment}/>
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

function Input({icon , value , placeholder , setValue}){
    return(
        <div className="w-full md:w-[48%] bg-white rounded-md  flex items-center text-gray-700 mb- mb-5 shadow-lg">
            <div className="w-[10%] flex items-center justify-center text-xl text-gray-500" >
                {icon}
            </div>
            <input 
             onChange={(e)=>setValue(e.target.value)}
             type="text"
             value={value}
             placeholder={placeholder}
             className="w-[90%] px-2 bg-transparent outline-none h-[55px] "
             />
        </div>
    )
}

function Message({value , setValue}){
    return(
        <div className="w-full bg-white shadow-lg flex items-start py-5 px-2 rounded-xl ">
            <div className="text-2xl">
             <TbMessage2/>
            </div>
            <textarea
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                row="6"
                resize="none" 
                type="text"
                placeholder="درخواست ..."
                className="w-full px-2 resize-none outline-none h-[120px]"    
            />

        </div>

    );
}
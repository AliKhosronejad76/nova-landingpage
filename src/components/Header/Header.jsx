"use client"
import { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


export default function Header(){
    const [active , setActive] = useState(false); 
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }
    // window.onload = function () {
    //     window.scrollTo(0, 0);
    // }
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[])
    
    useEffect(()=>{
       const changeNavBg = ()=>{
            if(window.scrollY > 100 ){
                setActive(true);
             }else{
                setActive(false);
            }
       }
       window.addEventListener('scroll', changeNavBg);
        return () => {
        window.removeEventListener('scroll', changeNavBg);
        }
    },[]);

    return(
        <header className={`px-7 flex justify-between h-[88px]  left-0 right-0 z-[100] top-0 ${active ? "bg-white fixed":"bg-transparent fixed"}`}>
            <div className="w-[20%]">
                <div className="w-max h-full flex items-center">
                    <Link href="/">
                        <Image 
                          width={400}
                          height={400}
                          src="/img/logo.svg"
                          className="w-[160px]"
                        />
                    </Link>
                </div>
            </div>

            <div className="w-[80%] flex items-center justify-between">
                <ul className="flex yekanbakhBold ">
                    <ListItem  title={"خانه"}/>
                    <ListItem  title={"امکانات"}/>
                    <ListItem  title={"درباره ما"}/>
                    <ListItem  title={"خانه"}/>
                    <ListItem  title={"نمونه کارها"}/>
                    <ListItem  title={"جدول قیمت ها"} />
                    <ListItem  title={"تیم ما"}/>
                    <ListItem  title={"تماس با ما"}/>

                </ul>

                <div className="h-full flex items-center gap-2">
                    <button className="text-2xl">
                        <CiBellOn/>
                    </button>
                    <button className="text-2xl">
                        <CiShoppingCart/>
                    </button>
                </div>
                
            </div>
        </header>
    )
}

function ListItem({title}){
    return(
        <li className="w-[80px] h-[33px]  p-2 text-sm hover:text-blue-800 hover:border hover:border-blue-800 rounded-3xl flex items-center justify-center text-nowrap transition duration-400 cursor-pointer">
             {title}
        </li>
    );
} 
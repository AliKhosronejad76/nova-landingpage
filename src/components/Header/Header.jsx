"use client";
import { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaTimesSolid } from "react-icons/lia";
import Drawer from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import { useDrawer } from "@/context/DrawerContextProvider";


export default function Header(){
    const [active , setActive] = useState(false); 
    const {setDrawer , drawer } = useDrawer();
    
    
    
    const drawerHandler = ()=>{
        setDrawer(prev=>!prev);
    }


   useEffect(()=>{
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
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
        <header className={` px-7 flex justify-between h-[88px]  left-0 right-0 z-[100] top-0 ${active ? "bg-white fixed":"bg-transparent fixed"}`}>
            <div className="w-[20%]">
                <div className="w-max h-full flex items-center">
                    <Link href="/">
                        <Image 
                          width={400}
                          height={400}
                          alt="logo"
                          src="/img/logo.svg"
                          className="w-[120px] sm:w-[160px]"
                        />
                    </Link>
                </div>
            </div>

            <div className="w-[80%] flex items-center justify-between">
                <div className="hidden lg:block">
                 <Menu dir="row"/>

                </div>
                <div onClick={()=>setDrawer(prev=>!prev)} className="text-3xl text-gray-600 w-full flex items-center justify-end transition-all duration-500 lg:hidden"> 
                  {drawer ?  <LiaTimesSolid  className="transition duration-500"/> : <GiHamburgerMenu className="transition duration-500"/> }
                </div>
                <div className="hidden h-full lg:flex items-center gap-2">
                    <button className="text-2xl">
                        <CiBellOn/>
                    </button>
                    <button className="text-2xl">
                        <CiShoppingCart/>
                    </button>
                </div>
                
            </div>
            <Drawer  />
        </header>
    )
}


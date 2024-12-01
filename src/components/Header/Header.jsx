"use client"
import { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import { useDrawer } from "@/context/DrawerContextProvider";


export default function Header(){
    const [active , setActive] = useState(false); 
    const {setDrawer , drawer } = useDrawer();
    
    
    
    const drawerHandler = ()=>{
        setDrawer(prev=>!prev);
    }


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
        <header className={` px-7 flex justify-between h-[88px]  left-0 right-0 z-[100] top-0 ${active ? "bg-white fixed":"bg-transparent fixed"}`}>
            <div className="w-[20%]">
                <div className="w-max h-full flex items-center">
                    <Link href="/">
                        <Image 
                          width={400}
                          height={400}
                          src="/img/logo.svg"
                          className="w-[140px] sm:w-[160px]"
                        />
                    </Link>
                </div>
            </div>

            <div className="w-[80%] flex items-center justify-between">
                <div className="hidden lg:block">
                 <Menu dir="row"/>

                </div>
                <div className="text-3xl text-gray-600 w-full flex items-center justify-end lg:hidden"> 
                    <GiHamburgerMenu onClick={()=>setDrawer(prev=>!prev)}/>
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


"use client";
import { useEffect  , useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useNav } from "@/context/NavContextProvider";

export default function ScrollToTop(){
    const [active , setActive] = useState(false);
    const {setSectionId} = useNav();
    useEffect(()=>{
       function scrollHadler(){
         if(window.scrollY > 800){
            setActive(true);
         }else{
            setActive(false);

         }

       }

       window.addEventListener("scroll" ,scrollHadler )
      
      
       return ()=> window.removeEventListener("scroll",scrollHadler)
    
    },[window.screenY]);


    const gotoTop = ()=>{
     window.scrollTo({top:0 , behavior:"smooth"});
     setSectionId(1);
   } 
    
    return(
        <button 
            onClick={()=>gotoTop()}
            className={` ${active?"flex":"hidden"} bg-sky-800 text-white w-[42px] h-[42px] sm:w-[55px] sm:h-[55px]  items-center justify-center fixed bottom-5 right-5 z-[90]  rounded-lg text-4xl`}
        >
            <IoIosArrowUp/>
        </button>
    );
}
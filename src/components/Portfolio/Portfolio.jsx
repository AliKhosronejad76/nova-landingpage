import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";


export default function Portfolio(){
    return(
        <section className=" py-14  px-8 bg-white" >
           <h1 className="text-center text-6xl yekanbakhFat my-5 text-gray-600">نمونه کار ها</h1>

            <div className="flex flex-wrap justify-between h-full">
                <Item link="/" img="/img/port1.jpg"/>
                <Item link="/" img="/img/port3.jpg"/>
                <Item link="/" img="/img/port2.jpg"/>
                <Item link="/" img="/img/port4.jpg"/>
                <Item link="/" img="/img/port5.jpg"/>
                <Item link="/" img="/img/port6.jpg"/>

            </div>
            
        </section>
    );
}

function Item({img , link }){
    return(
        <article className="w-[32%] relative h-[500px] bg-transparent">
           <header className="w-full">
             <Image 
                    src={img}
                    width={500}
                    height={500}
                    className="w-full absolute h-[60%]"
                />
                <div className={`flex items-center justify-center w-full h-[60%] absolute z-50 top-0 right-0 left-0 bottom-0 bg-[rgba(47,128,237,0.3)]`}>
                    <Link href={link} className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-700 text-2xl">
                        <FiLink/>
                    </Link>
                 </div>
           </header>
           
            <footer className="h-[180px] w-[90%] py-3 px-3 rounded-xl absolute bg-white shadow-md right-0 top-48 mb-30 flex flex-col justify-center gap-5 z-[70]">
                <h1 className="yekanbakhBold text-xl">توسعه گرافیکی</h1>

                <p className="text-sm leading-loose">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
            </footer>
            
        </article>
    );
}
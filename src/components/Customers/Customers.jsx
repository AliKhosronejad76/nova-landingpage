import Image from "next/image";


export default function Customers(){
    return(
        <section className="bg-white w-full flex items-center px-5 py-9">
            <Image 
                src="/img/1.svg"
                className="w-full h-[200px]"
                width={200}
                height={200}
            />
        </section>
    );
}


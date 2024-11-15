import MemberItem from "./MemberItem";

export default function OurTeam(){
    return(
        <section className="py-14 pb-8 px-8 bg-[#e5e5e5]">
           <h1 className="text-center text-6xl yekanbakhFat my-5 text-gray-600">تیم ما</h1>
           <h6 className="text-sm text-center text-gray-600 yekanbakhLight">متخصصین ما با شش سال تجربه این افتخار را دارند تا با بروزترین و حرفه‌ای‌ترین متد خدمات متنوعی را برای بهترین بودن به شما ارائه کنند</h6>
           <div className="flex flex-wrap justify-between mt-7 pt-10 px-12">
                <MemberItem 
                    img="/img/mem1.jpg" 
                
                />
                <MemberItem 
                    img="/img/mem2.jpg" 
                
                />
                <MemberItem 
                    img="/img/mem3.jpg" 
                
                />
                <MemberItem 
                    img="/img/mem4.jpg" 
                
                />

           </div>
        </section>
    );
}

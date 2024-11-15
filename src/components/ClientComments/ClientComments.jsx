import Image from "next/image";


export default function ClientComments(){
    return(
        <section className="py-14 pb-8 px-8 ">
           <h1 className="text-center text-4xl yekanbakhFat my-5 text-gray-600">تجربیات کاربران</h1>
            <div className="w-full flex justify-between flex-wrap mt-8">
                <CommentItem 
                    clientName="مریم احدی"
                    jobTitle="تورلیدر"
                    photo="/img/user1.png"

                />
                <CommentItem 
                    clientName="شروین احمدی"
                    jobTitle="برنامه نویس سمت کاربر"
                    photo="/img/user2.png"
                
                />
                <CommentItem 
                    clientName="علی قاسمی"
                    jobTitle="برنامه نویس"
                    photo="/img/user3.png"
                
                />
            </div>
        </section>

    )

}

function CommentItem({clientName , jobTitle , photo}){
    return(
        <div className="w-[48%] flex flex-col items-center gap-5 rounded-xl bg-transparent p-5 mb-6 shadow-xl">
           
            <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full ">
                    <Image 
                        width={300}
                        height={300}
                        className="w-full h-full "
                        src={photo}
                    />
                </div>
                <span className="yekanbakhHeavy text-xl">{clientName}</span>
                <span className="text-sm">{jobTitle}</span>
            </div>



        <div>
            <p className="text-center yekahbakhLight leading-loose text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، 
            </p>
        </div>

        </div>
    );
}
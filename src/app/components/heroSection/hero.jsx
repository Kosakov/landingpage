import { HiOutlineMail } from "react-icons/hi";

export default function heroSection(){
    return(
        <div className=" bg-[#394649] text-white flex flex-col items-center ">
            <div className=" text-center w-[728px] py-32 ">
            <h1 className=" text-7xl font-bold pb-8">Готови ли сте да работим заедно?</h1>
            <p className=" text-xl w-[55ch] pl-16 pb-11">Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>
            <div className=" flex items-center justify-center ">
            <HiOutlineMail className=" relative left-8 text-[#7F8C89]"/>
                <input type="tel" placeholder="Мобилен телефон" className=" h-20 rounded-xl w-80 text-center place-self-center text-black" max="10" />
                <p className=" h-20 border-2 rounded-xl w-36 bg-[#E7F874] text-[#083C2F] text-center p-6 relative right-4 border-transparent rounded-tl-none rounded-bl-none">Изпрати</p>
                
            </div>
            </div>
            
            
        </div>
    )
}


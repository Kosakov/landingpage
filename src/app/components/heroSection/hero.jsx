"use client";
import React,{ useState} from "react";
import {Zoom,ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../heroSection/styles.css"
import { HiOutlineMail } from "react-icons/hi";

export default function heroSection() {
    const [phone,setPhone]=useState()
    const notify = () => {
        if (!phone){
            return
        }
        else if (phone.match(/^08\d{8}$/)){
            toast.success('Успешно записахме вашият телефонен номер! Очаквайте обаждане.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                })
        }
        else{
            toast.warn('Моля въведе вашият телефонен номер във формат 08********', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                })
        }
        };

    
  return (
    <div className=" bg-[#394649] text-white flex flex-col items-center ">
      <div className=" text-center w-[728px] py-32 ">
        <h1 className=" text-7xl font-bold pb-8">
          Готови ли сте да работим заедно?
        </h1>
        <p className=" text-xl w-[55ch] pl-16 pb-11">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        <div className=" flex items-center justify-center ">
          <HiOutlineMail className=" relative left-8 text-[#7F8C89]" />
          <input
          onChange={e=>setPhone(e.target.value)}
          onWheel={(e) => e.target.blur()}
            type="number"
            placeholder="Мобилен телефон"
            className=" h-20 rounded-xl w-80 text-center place-self-center text-black outline-none"
            max="10"
          />
          <button
            onClick={notify}
            
            className=" font-bold h-20 border-2 rounded-xl w-30 bg-[#E7F874] text-[#083C2F] text-center p-6 relative right-4 border-transparent rounded-tl-none rounded-bl-none">
            Изпрати
          </button>
          <ToastContainer className="text-xl font-bold text-[#083C2F]"/>
        </div>
      </div>
    </div>
  );
}

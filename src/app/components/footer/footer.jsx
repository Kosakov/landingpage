import Image from "next/image";

import "../footer/style.css"


export default function Footer() {
  return (
    <footer className=" my-24 flex justify-center ">
      <div className=" max-w-7xl flex  flex-col gap-16">
      <div className=" text-left text-5xl font-bold text-[#01303A]">
        
        <h1>Други услуги</h1>
        
      </div>
      <div className=" flex justify-center gap-10 text-[#01303A] font-bold text-2xl font-grotesk">
        <div className="flex  flex-col gap-9">
        <img src="/ADR.png" alt="" />
          <p>Опасни товари (ADR)</p>
        </div>
        <div className="flex  flex-col gap-9">
          <img src="/freezer.png" alt="" />
          <p>Хладилен транспорт</p>
        </div>
        <div className="flex  flex-col gap-9">
        <img src="/Containers.png" alt="" />
          <p>Извънгабаритни товари</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

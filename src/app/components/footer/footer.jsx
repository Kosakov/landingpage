import Image from "next/image";


export default function Footer() {
  return (
    <footer className=" my-24 flex justify-center">
      <div className=" max-w-7xl flex  flex-col gap-16">
      <div className=" text-left text-5xl font-bold text-[#01303A]">
        
        <h1>Други услуги</h1>
        
      </div>
      <div className=" flex justify-center gap-10 text-[#01303A] font-bold text-2xl font-grotesk">
        <div className="flex  flex-col gap-9">
          <Image src="/ADR.png" width={416} height={300} alt="ADR" />
          <p>Опасни товари (ADR)</p>
        </div>
        <div className="flex  flex-col gap-9">
          <Image
            src="/freezer.png"
            width={416}
            height={300}
            alt="Хладилен транспорт"
          />
          <p>Хладилен транспорт</p>
        </div>
        <div className="flex  flex-col gap-9">
          <Image
            src="/Containers.png"
            width={416}
            height={300}
            alt="Извънгабаритни товари"
          />
          <p>Извънгабаритни товари</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

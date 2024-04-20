import Image from "next/image";
 import "../heading/style.css"
export default function Heading() {
  return (
    <div className="max-w-[931px] max-sm:text-center">
      <div className=" font-extrabold text-7xl text-[#01303A] text-center mb-20 font-grotesk tracking-tighter max-lg:mb-3 ">
        <h1>Гъвкави решения за сухoпътeн транспорт за всеки клиент</h1>
      </div>
      <div>
      <img src="/pic.png" alt="truck" />
      </div>
    </div>
  );
}

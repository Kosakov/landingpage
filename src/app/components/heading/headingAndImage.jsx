import Image from "next/image";
 import "../heading/style.css"
export default function Heading() {
  return (
    <div className="w-[931px]">
      <div className=" font-black text-7xl text-[#01303A] text-center mb-20 font-grotesk tracking-tighter">
        <h1>Гъвкави решения за сухoпътeн транспорт за всеки клиент</h1>
      </div>
      <div>
      <img src="/pic.png" alt="truck" />
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Heading() {
  return (
    <div className="w-[931px]">
      <div className=" font-extrabold text-7xl text-[#01303A] text-center mb-20">
        <h1>Гъвкави решения за сухoпътeн транспорт за всеки клиент</h1>
      </div>
      <div>
      <Image
        src="/pic.png"
        width={969}
        height={690}
        alt="Picture of the author"
      />
      </div>
    </div>
  );
}

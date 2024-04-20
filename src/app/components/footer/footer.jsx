
import "../footer/Fstyle.css"


export default function Footer() {
  return (
    <footer className=" my-24 flex justify-center max-sm:my-10">
      <div className=" max-w-7xl flex  flex-col gap-16 max-sm:gap-10">
      <div className=" text-left text-5xl font-bold text-[#01303A] max-sm:text-center max-sm:text-3xl">
        <h1>Други услуги</h1>
      </div>
      <div className=" flex justify-center gap-10 text-[#01303A] font-bold text-2xl font-grotesk max-sm:gap-6 max-sm:flex-col max-sm:place-items-center">
        <div className="flex  flex-col gap-9 max-sm:items-center max-sm:gap-2">
        <img src="/ADR.png" alt="" />
          <p>Опасни товари (ADR)</p>
        </div>
        <div className="flex  flex-col gap-9 max-sm:items-center max-sm:gap-2">
          <img src="/freezer.png" alt="" />
          <p>Хладилен транспорт</p>
        </div>
        <div className="flex  flex-col gap-9 max-sm:items-center max-sm:gap-2">
        <img src="/Containers.png" alt="" />
          <p>Извънгабаритни товари</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

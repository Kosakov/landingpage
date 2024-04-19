import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
export default function navBar() {
  return (
    <div className=" flex flex-nowrap justify-around  my-7  text-[#01303A] items-center">
        <a href="#" className="font-extrabold text-4xl font-SpaceGrotesk">
          Website
        </a>
      <nav className=" flex flex-nowrap gap-10 font-semibold w-200 flex-2 shrink-1 items-center basis-auto">
        <a href="#" className="hover:underline">Начало</a>
        <a href="#" className="hover:underline">За нас</a>
        <a href="#" className="hover:underline">Услуги</a>
        <a href="#" className="hover:underline">Цени</a>
        <a href="#" className="hover:underline">Как работи</a>
        <a href="#" className="hover:underline mr-20">Контакти</a>
      
        <a href="#" className=" hover:underline ml-32">
          Профил
        </a>
        <a
          href="#"
          className=" border-gray-800 border-2  rounded-lg py-4 px-4 hover:bg-[#01303A] hover:text-white"
        >
          Заявка за пратка
        </a>
        </nav>
    </div>
  );
}

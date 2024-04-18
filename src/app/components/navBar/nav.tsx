import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function navBar() {
  return (
    <div className=" flex flex-nowrap justify-around  my-7  text-[#01303A] items-center">
      <div className={spaceGrotesk.className}>
        <p className="font-extrabold text-4xl ">
          Website
        </p>
      </div>
      <nav className=" flex flex-nowrap gap-16 font-semibold">
        <a href="#">Начало</a>
        <a href="#">За нас</a>
        <a href="#">Услуги</a>
        <a href="#">Цени</a>
        <a href="#">Как работи</a>
        <a href="#">Контакти</a>
      </nav>
      <nav className=" flex flex-nowrap gap-16  font-semibold ">
        <a href="#" className=" self-center">
          Профил
        </a>
        <a
          href="#"
          className=" border-gray-800 border-2  rounded-lg py-2 px-1.5"
        >
          Заявка за пратка
        </a>
      </nav>
    </div>
  );
}

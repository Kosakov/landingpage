
import a from 'next/a';


export default function navBar() {
  return (
    <nav className="flex items-center justify-around p-4 text-[#01303A]">
    <div className=" font-grotesk font-extrabold text-4xl" >Website</div>
    <div className="flex items-center space-x-4 font-semibold">
      <a href="#">
        <a className=" hover:underline">Начало</a>
      </a>
      <a href="#">
        <a className="hover:underline">За нас</a>
      </a>
      <a href="#">
        <a className="hover:underline">Услуги</a>
      </a>
      <a href="#" >
        <a className="hover:underline">Цени</a>
      </a>
      <a href="#" >
        <a className="hover:underline">Как работи</a>
      </a >
      <a href="#" >
        <a className="hover:underline">Контакти</a>
      </a >
    </div>
    <div className="flex items-center space-x-4 font-semibold">
      <button className="hover:underline">Профил</button>
      <button className="border-gray-800 border-2 rounded-lg py-4 px-4 hover:bg-[#01303A] hover:text-white">Заявка за пратка</button>
    </div>
  </nav>
  );
}

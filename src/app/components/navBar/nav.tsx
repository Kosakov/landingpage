export default function navBar() {
  return (
    <nav className="flex items-center justify-around p-4 text-[#01303A]">
    <div className=" font-grotesk font-extrabold text-4xl" >Website</div>
    <div className="flex items-center space-x-4 font-semibold">
      <p>
        <a href="#" className=" hover:underline">Начало</a>
      </p>
      <p>
        <a href="#" className="hover:underline">За нас</a>
      </p>
      <p>
        <a href="#" className="hover:underline">Услуги</a>
      </p>
      <p >
        <a href="#" className="hover:underline">Цени</a>
      </p>
      <p >
        <a href="#" className="hover:underline">Как работи</a>
      </p >
      <p >
        <a href="#" className="hover:underline">Контакти</a>
      </p >
    </div>
    <div className="flex items-center space-x-4 font-semibold">
      <button className="hover:underline">Профил</button>
      <button className="border-gray-800 border-2 rounded-lg py-4 px-4 hover:bg-[#01303A] hover:text-white">Заявка за пратка</button>
    </div>
  </nav>
  );
}

export default function navBar() {
  return (
    <nav className=" bg-white flex items-center justify-around p-2 pb-3 text-[#01303A] max-lg:flex-col max-lg:justify-center max-sm:pt-3 w-[100%] fixed">
    <div className=" font-grotesk font-extrabold text-3xl max-sm:text-5xl max-sm:pb-4" >Website</div>
    <div className="flex items-center space-x-4 font-semibold max-lg:flex-col max-lg:space-x-0 max-lg:text-2xl">
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
    <div className="flex items-center space-x-4 font-semibold max-lg:flex-col max-lg:text-2xl">
      <button className="hover:underline max-sm:pb-4">Профил</button>
      <button className="border-gray-800 border-2 rounded-lg py-2 px-4 hover:bg-[#01303A] hover:text-white">Заявка за пратка</button>
    </div>
  </nav>

  
  );
}

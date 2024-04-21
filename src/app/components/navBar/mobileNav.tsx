"use client";
import { slide as Menu } from 'react-burger-menu';

import '../navBar/burger.css'

export default function Sidebar(){
  return (
    <Menu width={ '250px' } right>
      <a id="home" className="menu-item hover:underline" href="#">Начало</a>
      <a id="about" className="menu-item hover:underline" href="#">За нас</a>
      <a id="contact" className="menu-item hover:underline" href="#">Услуги</a>
      <a id="contact" className="menu-item hover:underline" href="#">Цени</a>
      <a id="contact" className="menu-item hover:underline" href="#">Как работи</a>
      <a id="contact" className="menu-item hover:underline" href="#">Контакти</a>
      <a id="contact" className="menu-item hover:underline" href="#">Профил</a>
      <button className="border-white-800 border-2 rounded-lg py-2 px-2  hover:bg-white hover:text-[#01303A]">Заявка за пратка</button>
    </Menu>
  );
};


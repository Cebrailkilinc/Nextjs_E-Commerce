"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'

//ICONS
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl"

const Navbar = () => {
  //const [openSideMenu, setOpenSideMenu] = useState<string>("w-0"); 
  const menuRef = useRef(null);

  //OPEN SIDEBAR MENU FUNCTİON
  // const openSideBasketMenu: () => void = () => {
  //   if (openSideMenu === "w-0")
  //   {
  //     setOpenSideMenu("w-60")
  //   }else{
  //     setOpenSideMenu("w-0")
  //   }      
  // }

  return (
    <>
      <nav className="border-b shadow-sm  w-full">
        <div className="flex items-center justify-between px-20 ">
          {/* LEFT CHILD */}
          <div className="">
            <Link href="/">Left child</Link>
          </div>

          {/* MIDDLE CHILD */}
          <div className="flex flex-1">
            <div className="flex items-center border outline-none hover:border-orange-400 p-2 rounded-md w-1/2 mx-auto">
              <input
                placeholder="Searching..."
                className="flex flex-1 outline-none px-1 text-sm focus:border-orange-400 "
              />
              <BsSearch className="hover:text-red-400 text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* RIGHT CHILD */}
          <div className="flex gap-10">
            {/* dropdown menu       */}
            <div className="flex flex-col justify-center items-center " >
              <div className="peer  flex items-center gap-2 text-sm text-gray-800 py-5 cursor-pointer hover:text-orange-400 transition ease-in-out delay-150">
                <FaUserAlt />
                <h6>Sign In</h6>
              </div>
              <div className="hidden absolute top-[60px] peer-hover:flex hover:flex text-sm flex-col bg-white drop-shadow-lg border p-3 rounded">
                <button className="bg-orange-400 text-white px-8 py-1 rounded-sm hover:opacity-80"><Link href="/dashboard/login">Login</Link></button>
                <button className="text-gray-500 border px-8 py-1 rounded-sm mt-2 hover:border-orange-400 hover:text-orange-400" ><Link href="/dashboard/register">Register</Link></button>
              </div>
            </div>

            <Link href="/dashboard/cart">
              <div className=" flex relative items-center gap-2 text-sm text-gray-800 py-5 cursor-pointer hover:text-orange-400 transition ease-in-out delay-150">
                <span className="inline-flex  absolute top-4 right-11 items-center justify-center w-4 h-4 text-center text-xxs font-bold leading-none text-red-100 bg-orange-400 rounded-full">9</span>
                <AiOutlineHeart size={20} />
                <h6>Favorite</h6>
              </div>
            </Link>
            <Link href="/dashboard/cart">
              <div className=" flex relative items-center gap-2 text-sm text-gray-800 py-5 cursor-pointer hover:text-orange-400 transition ease-in-out delay-150">
                <span className="inline-flex  absolute top-4 right-9 items-center justify-center w-4 h-4 text-center text-xxs font-bold leading-none text-red-100 bg-orange-400 rounded-full">99</span>
                <SlBasket size={20} />
                <h6>Basket</h6>
              </div>
            </Link>
          </div>
        </div>
        <ul className="flex items-center justify-center gap-5 py-3 text-sm ">
          <li className="cursor-pointer hover:text-orange-400 focus:text-red-500 ">All</li>
          <li>Günlük</li>
          <li>Spor</li>
          <li>Outdoor</li>
        </ul>

      </nav>
      {/* <div ref={menuRef} className={`h-screen ${openSideMenu} absolute right-0 top-0 bg-slate-500 transform transition-transform ease-in-out duration-300  z-50 `} >
        BASKET AREA
      </div> */}
    </>
  );
};

export default Navbar;

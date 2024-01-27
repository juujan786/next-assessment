"use client";
import React, { useState } from "react";
import Search from "./Search";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className="relative w-[90%] md:w-[85%] lg:w-[85%] 2xl:w-[1300px] mx-auto flex justify-between my-8 items-center">
      <Link
        href={"/"}
        onClick={() => setNavOpen(false)}
        className="text-2xl font-bold cursor-pointer"
      >
        Ecommerce
      </Link>
      <div
        className={`${
          navOpen ? "flex" : "hidden"
        } lg:flex  lg:w-full justify-between px-12
        lg:items-center
        absolute lg:relative w-screen bg-white lg:bg-transparent lg:top-0 top-16 left-[-30px] z-10 flex-col lg:flex-row gap-4 lg:gap-0 py-10 lg:py-0
        `}
      >
        <nav>
          <ul className="flex gap-5 text-sm  flex-col lg:flex-row">
            <li>
              <Link href="/electronics" onClick={() => setNavOpen(false)}>
                Electronic
              </Link>
            </li>
            <li>
              <Link href="/men's fashion" onClick={() => setNavOpen(false)}>
                Men{"'"}s Fashion
              </Link>
            </li>
            <li>
              <Link href="/women's fashion" onClick={() => setNavOpen(false)}>
                Women{"'"}s Fashion
              </Link>
            </li>
            <li>
              <Link href="/jewelery" onClick={() => setNavOpen(false)}>
                Jewelry
              </Link>
            </li>
          </ul>
        </nav>
        <span className="">
          <Search />
        </span>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href={"/cart"}
          className="bg-black border-lg py-2 px-6 rounded-xl flex gap-2 text-white"
        >
          <span>{totalQuantity}</span>
          <ShoppingCart />
        </Link>

        <span
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden p-1 shadow-lg rounded-lg hover:shadow-xl cursor-pointer"
        >
          {navOpen ? <X size={40} /> : <Menu size={40} />}
        </span>
      </div>
    </header>
  );
};

export default Header;

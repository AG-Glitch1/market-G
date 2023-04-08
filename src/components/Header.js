import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";
function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <div className="min-h-full pb-28">
      <div as="nav" className="bg-gray-800 fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to={"/"} className="flex-shrink-0 cursor-pointer">
                <GiClothes className="text-gray-400 text-3xl" />
              </Link>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full relative bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer">
                <div className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <BsBag className="block h-6 w-6" />
                  <div className="bg-red-500 absolute -right-0 top-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
                    {itemAmount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

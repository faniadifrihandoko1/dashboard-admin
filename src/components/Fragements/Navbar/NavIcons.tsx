import React from "react";
import {
  IoIosNotificationsOutline,
  IoMdInformationCircleOutline,
  IoMdColorPalette,
} from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

interface NavIconsProps {
  setSidebarOpen: (arg0: boolean) => void;
  sidebarOpen: boolean;
}

const NavIcons: React.FC<NavIconsProps> = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <>
      <IoMenuOutline
        className="block md:hidden cursor-pointer hover:text-blue-600"
        size={30}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
      <IoIosNotificationsOutline
        className="hover:text-blue-600 cursor-pointer"
        size={30}
      />
      <IoMdInformationCircleOutline
        className="cursor-pointer hover:text-blue-600"
        size={30}
      />
      <IoMdColorPalette
        className="cursor-pointer hover:text-blue-600"
        size={30}
      />
      <img
        className="h-5 w-5 p-4 md:h-9 md:w-9 md:p-0 rounded-full ring-2 ring-white bg-blue-800 flex justify-center items-center text-white text-sm font-semibold"
        src=""
        alt="AP"
      />
    </>
  );
};

export default NavIcons;

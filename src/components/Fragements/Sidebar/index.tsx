import { IoMdHome, IoMdUnlock } from "react-icons/io";
import { MdBarChart, MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SidebarMenuItem from "./SidebarMenuItem";
import { IoCloseSharp } from "react-icons/io5";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const menu = [
    { title: "Main Dashboard", icon: <IoMdHome />, active: false },
    {
      title: "NFT Marketplace",
      icon: <MdOutlineShoppingCart />,
      active: false,
    },
    { title: "Data Tables", icon: <MdBarChart />, active: true },
    { title: "Profile", icon: <FaUserAlt />, active: false },
    { title: "Sign in", icon: <IoMdUnlock />, active: false },
    { title: "RTL Admin", icon: <IoMdHome />, active: false },
  ];

  return (
    <div
      className={`absolute left-0   top-0 z-50 px-9 py-14  flex h-screen text-black text-center  w-4/5 md:w-1/4 flex-col  bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="block md:hidden">
        <IoCloseSharp
          onClick={() => setSidebarOpen(!open)}
          className="text-2xl absolute top-5 right-5 cursor-pointer"
        />
      </div>
      <div className="relative">
        <h1 className="text-2xl font-bold">
          HORIZON <span className="font-semibold">FREE</span>
        </h1>
      </div>
      <hr className="border-gray-200 border-[1.5px] w-full mt-8" />
      <div className="mt-5 w-full pl-8">
        {menu.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

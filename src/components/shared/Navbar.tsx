import React from "react";
// import notficationIcon from "../../assets/notificationIcon.png";
import CountryInfo from "./CountryInfo";
import { RiNotification3Line } from "react-icons/ri";

import { MenubarDemo } from "./NavbarNotification";
import UserInfo from "./UserInfo";

interface NavButtonProps {
  icon: React.ReactNode; // For React elements (like <RiNotification3Line />)
  color: string;
  dotColor: string;
  customFunc: () => void; // Function with no arguments and no return value
}

//  title, customFunc, icon, color, dotColor }
const NavButton: React.FC<NavButtonProps> = ({
  icon,
  color,
  dotColor,
  customFunc,
}) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </div>
  );
};
const Navbar: React.FC = () => {
  const handleClick = (name: string) => {
    console.log(`${name} clicked`);
  };
  const currentColor = "black";
  return (
    <div className="flex justify-center items-center bg-navbarBgColor shadow-custom p-5">
      <div className=" flex justify-between items-center w-full h-[56px]">
        <div className="font-poppins text-[32px] font-semibold leading-[40px]  decoration-skip-ink-none ml-5">
          Logo
        </div>

        <div className="searchbar ">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-5 px-[16px] pr-[375px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins text-gray-700 placeholder-gray-500 shadow-custom -ml-5"
          />
        </div>

        <div className="profilecontainer flex gap-2 items-center justify-center">
          <span>
            <NavButton
              dotColor="rgb(254, 201, 15)"
              customFunc={() => handleClick("notification")}
              color={currentColor}
              icon={<RiNotification3Line className="w-8 h-8" />}
            />
          </span>

          <MenubarDemo element={<CountryInfo />} />
          <MenubarDemo element={<UserInfo />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

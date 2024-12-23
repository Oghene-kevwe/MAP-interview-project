import { IoMdMenu } from "react-icons/io";
import { SideBar } from "./sideBar";
import { useState } from "react";
import mapLogoBlue from "../assets/mapLogoBlue.svg";
import calendarIcon from "../assets/sidebarIcons/calendarIcon.svg";
import communicationIcon from "../assets/sidebarIcons/communicationIcon.svg";
import contactsIcon from "../assets/sidebarIcons/contactsIcon.svg";
import dashboardIcon from "../assets/sidebarIcons/dashboardIcon.svg";
import financeIcon from "../assets/sidebarIcons/financeIcon.svg";
import inventoryIcon from "../assets/sidebarIcons/inventoryicon.svg";
import procurementIcon from "../assets/sidebarIcons/procurementIcon.svg";
import { NavCTA } from "./navCTA";

export const NavBar = () => {
  const [showSideBar, setSideBar] = useState(false);

  const linksData = [
    {
      id: 0,
      linkName: "Dashboard",
      linkUrl: "#",
      icon: dashboardIcon,
    },
    {
      id: 1,
      linkName: "Inventory",
      linkUrl: "#",
      icon: inventoryIcon,
    },
    {
      id: 2,
      linkName: "Procurement",
      linkUrl: "/",
      icon: procurementIcon,
      dropdown: true,
      sublink: [
        {
          id: 0,
          linkName: "Qoutes",
          linkUrl: "/",
        },
        {
          id: 1,
          linkName: "Order",
          linkUrl: "#",
        },
      ],
    },
    {
      id: 3,
      linkName: "Finance",
      linkUrl: "#",
      icon: financeIcon,
      dropdown: true,
    },
    {
      id: 4,
      linkName: "Communication",
      linkUrl: "#",
      icon: communicationIcon,
    },
    {
      id: 5,
      linkName: "Calendar",
      linkUrl: "#",
      icon: calendarIcon,
    },
    {
      id: 6,
      linkName: "Contacts",
      linkUrl: "#",
      icon: contactsIcon,
    },
  ];

  // DONT DELETE
  const showSidebarClassName = "sidebarBTN";

  return (
    <nav className=" bg-white px-2 py-4 border border-borderGray lg:p-2 lg:pr-8 w-full mb-4 fixed lg:w-[calc(100vw-238px)] top-0 z-20">
      <div className=" flex items-center justify-between">
        {/* logo */}
        <div className="lg:hidden">
          <Logo />
        </div>
        {/* menu button */}
        <button
          onClick={() => setSideBar(!showSideBar)}
          className={`${showSidebarClassName}  lg:hidden`}
        >
          <IoMdMenu className=" text-primaryBlue" size={30} />
        </button>
        {/* nav cta */}
        <div className=" lg:ml-auto lg:w-[60%] hidden lg:block">
          <NavCTA />
        </div>
      </div>
      <SideBar
        {...{ showSideBar, setSideBar, showSidebarClassName, linksData }}
      />
    </nav>
  );
};

export const Logo = () => {
  return (
    <div className=" lg:mb-6 lg:pl-2 ">
      <img src={mapLogoBlue} alt="site logo" className="block w-full" />
    </div>
  );
};

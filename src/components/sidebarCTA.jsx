import { Link } from "react-router-dom";
import supportIcon from "../assets/sidebarIcons/supportIcon.svg";
import settingsIcon from "../assets/sidebarIcons/settingsIcon.svg";
import avatarIcon from "../assets/sidebarIcons/sidebaravatar.png";
import logoutIcon from "../assets/sidebarIcons/logoutIcon.svg";

export const SidebarCTA = () => {
  const email = "markbenson@coremed.com";

  return (
    <div className=" mt-auto pb-4 flex flex-col gap-4 px-2">
      {/* support */}
      <Link to={"#"} className=" flex gap-x-3 items-center">
        <img src={supportIcon} alt="support" />
        <span>Support</span>
      </Link>

      {/* settings */}
      <Link to={"#"} className=" flex gap-x-3 items-center">
        <img src={settingsIcon} alt="settings" />
        <span>Settings</span>
      </Link>
      {/* avatar */}

      <div className=" flex items-center gap-x-3">
        {/* avatar */}
        <img src={avatarIcon} alt="avatar" />
        <div className="">
          <p className=" text-primaryGray900 font-bold">Mark Benson</p>
          <p>{email.slice(0, 15)}...</p>
        </div>
        {/* logout icon */}
        <Link to={"#"} className=" flex gap-x-3 ml-auto">
          <img src={logoutIcon} alt="logout" />
        </Link>
      </div>
    </div>
  );
};

import searchIcon from "../assets/searchIcon.svg";
import bellIcon from "../assets/bellIcon.svg";
import chatIcon from "../assets/chatIcon.svg";
import navAvatar from "../assets/navAvatar.svg";
import dropdown from "../assets/dropdown.svg";

export const NavCTA = () => {
  return (
    <div className=" flex flex-col gap-3 mb-4 lg:flex-row lg:justify-between w-full">
      {/* buttons */}
      <div className=" flex gap-x-2 justify-between items-center order-2">
        <div className=" flex gap-x-2 items-center">
          <button>
            <img src={bellIcon} alt="bell" />
          </button>
          <button>
            <img src={chatIcon} alt="chat" />
          </button>
        </div>
        <button className=" flex items-center gap-2">
          <img src={navAvatar} alt="avatar" />
          <img src={dropdown} alt="dropdown" />
        </button>
      </div>

      {/* search */}
      <div className=" border border-borderGray w-full relative rounded-md ">
        {/* search Icon */}
        <img
          src={searchIcon}
          alt="search icon"
          className=" left-2 absolute top-[50%] -translate-y-[50%]"
        />
        <input
          type="text"
          className=" bg-transparent w-full inline-block outline-none p-2 pl-8 placeholder:text-sm placeholder:text-[#667185]"
          placeholder="Search here..."
        />
      </div>
    </div>
  );
};

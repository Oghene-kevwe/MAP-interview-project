import { Link } from "react-router-dom";
import { useGlobalContext } from "../utils/context";
import { useRef, useState } from "react";
import { useHideOnclickOutsideContainer } from "../hooks/useHideOnclickOutsideContainer";
import { NavCTA } from "./navCTA";
import { SidebarCTA } from "./sidebarCTA";
import dropdownIcon from "../assets/dropdown.svg";
import { Logo } from "./navBar";

export const SideBar = ({
  showSideBar,
  setSideBar,
  showSidebarClassName,
  linksData,
}) => {
  const { windowWidth, activePageId, dispatch, sublinkPageId } =
    useGlobalContext();
  const asideRef = useRef(null);

  const [activeSubLinkId, setActiveSubLinkId] = useState(2); // Track open sublink

  useHideOnclickOutsideContainer(
    asideRef,
    showSidebarClassName,
    setSideBar,
    windowWidth < 1024
  );

  function handleLink(id) {
    dispatch({
      type: "CLICK_NAV_LINK",
      payload: id,
    });

    // Toggle sublink for clicked link and close others
    setActiveSubLinkId((prevId) => (prevId === id ? null : id));

    // Close sidebar on smaller screens if not Procurement or finance
    if (id !== 2 && id !== 3 && windowWidth < 1024) {
      setSideBar(false);
    }
  }

  function handleSubLink(id) {
    dispatch({
      type: "CLICK_SUB_LINK",
      payload: id,
    });

    // Close sidebar on smaller screens
    if (windowWidth < 1024) {
      setSideBar(false);
    }
  }

  return (
    <aside
      ref={asideRef}
      className={`globalTransition text-primaryGray700 fixed w-[80%] md:w-[40%] lg:max-w-[238px] bg-sideBarGray z-50 h-screen text-sm top-0 left-0 flex flex-col ${
        !showSideBar && windowWidth < 1024
          ? "-translate-x-[100%]"
          : "translate-x-0"
      } pt-6 pl-2 pr-4`}
    >
      <div>
        {/* nav cta for small screen */}
        <div className=" lg:hidden">
          <NavCTA />
        </div>
        {/* logo for large screen */}
        <div className=" hidden lg:block">
          <Logo />
        </div>
      </div>

      {/* links */}
      <div className="flex flex-col gap-y-2">
        {linksData.map(({ linkName, id, linkUrl, icon, sublink, dropdown }) => (
          <div key={id} className="flex gap-2 flex-col">
            <Link
              to={linkUrl}
              onClick={() => handleLink(id)}
              className={`globalTransition w-full ${
                activePageId === id
                  ? "bg-primaryGray"
                  : "bg-transparent hover:bg-primaryGray"
              } rounded-md p-2 text-xs flex justify-between items-center`}
            >
              {/* link name */}
              <div className="flex items-center gap-x-3">
                <img src={icon} alt={linkName} />
                <span>{linkName}</span>
              </div>

              {/* dropdown */}
              {dropdown && (
                <button>
                  <img src={dropdownIcon} alt="dropdown" />
                </button>
              )}

              {/* pending count */}
              {(id === 4 || id === 5) && (
                <span className="bg-primaryBlue grid place-items-center text-xs font-medium rounded-lg text-white h-[17px] w-[30px]">
                  10
                </span>
              )}
            </Link>

            {/* sublink */}
            {sublink && activeSubLinkId === id && (
              <div className="flex flex-col gap-2 pl-9">
                {sublink.map(({ id: subId, linkName, linkUrl }) => (
                  <Link
                    key={subId}
                    to={linkUrl}
                    onClick={() => handleSubLink(subId)}
                    className={` rounded-md p-2 ${
                      sublinkPageId == subId
                        ? "bg-primaryGray"
                        : "bg-transparent hover:bg-primaryGray"
                    }`}
                  >
                    {linkName}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* side bar CTA */}
      <SidebarCTA />
    </aside>
  );
};

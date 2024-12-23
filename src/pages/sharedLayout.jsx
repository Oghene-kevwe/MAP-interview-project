import { Outlet } from "react-router";
import { NavBar } from "../components/navBar";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";

export const SharedLayout = () => {
  return (
    <div>
      <ScrollToTopOnPageChange />
      <div className="lg:w-[calc(100vw-238px)] lg:ml-auto ">
        <NavBar />
        <div className=" pt-[75px] pb-10 px-4 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

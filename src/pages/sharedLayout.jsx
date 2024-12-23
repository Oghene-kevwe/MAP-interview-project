import { Outlet,  } from "react-router";
import { NavBar } from "../components/navBar";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";

export const SharedLayout = () => {
  return (
    <div>
      <ScrollToTopOnPageChange />
      <NavBar />
      <Outlet />
    </div>
  );
};

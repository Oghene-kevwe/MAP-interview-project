import { Outlet } from "react-router";
import { NavBar } from "../components/navBar";
import { ScrollToTopOnPageChange } from "../components/scrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalLoadingIcon } from "../components/globalLoading";
import { useGlobalContext } from "../utils/context";
import { QouteSentModal } from "../components/procurement/respondQoute/qouteSentModal";

export const SharedLayout = () => {
  const { globalLoading, showSubmitSuccess } = useGlobalContext();

  return (
    <div>
      <ScrollToTopOnPageChange />
      {globalLoading && <GlobalLoadingIcon />}
      <ToastContainer />
      <div className="lg:w-[calc(100vw-238px)] lg:ml-auto ">
        <NavBar />
        <div className=" pt-[80px] pb-10 px-4 lg:px-8">
          {showSubmitSuccess && <QouteSentModal />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

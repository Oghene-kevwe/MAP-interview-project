import cancelIcon from "../../../assets/whiteCancel.svg";
import { QouteInformation } from "./qouteInformation";
import { QouteItems } from "./qouteItems";
import signIcon from "../../../assets/sign-doc.svg";
import dropdown from "../../../assets/dropdown.svg";
import { Link } from "react-router-dom";

export const Qoute = () => {
  return (
    <section className="flex flex-col gap-6">
      {/* header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-black flex flex-col ">
          <span className="font-bold text-xl md:text-2xl">Quote details</span>
          <span className="text-[#667185] text-sm">
            Created on Wed, 12th June 2022, 08:00am
          </span>
        </h2>
        {/* buttons */}
        <div className="text-white flex text-sm font-bold gap-4">
          <Link
            to={"/qoute-response"}
            className="bg-primaryBlue rounded-[10px] w-[90px]  p-2 h-fit grid place-items-center "
          >
            Respond
          </Link>
          <button className="bg-primaryRed rounded-[10px] p-2 w-[90px] flex items-center justify-center gap-x-2 h-fit">
            <img src={cancelIcon} alt="cancel" />
            Reject
          </button>
        </div>
      </div>

      <QouteInformation />
      <QouteItems />
      {/* term attachment */}
      <article className=" componentBorder flex justify-between">
        <div className=" flex items-center gap-x-2">
          <img src={signIcon} alt="sign doc" />
          {/* detail */}
          <div>
            <p className=" text-[#1D2739] font-bold ">Terms and Attachments</p>
            <p className=" text-[#475367] w-[80%] md:w-full">
              Review payment and delivery terms
            </p>
          </div>
        </div>
        {/* drop down */}
        <button>
          <img src={dropdown} alt="dropdown" />
        </button>
      </article>
    </section>
  );
};

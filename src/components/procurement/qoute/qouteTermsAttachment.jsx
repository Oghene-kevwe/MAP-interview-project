import signIcon from "../../../assets/sign-doc.svg";
import dropdown from "../../../assets/dropdown.svg";

export const QouteTermsAttachment = () => {
  return (
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
  );
};

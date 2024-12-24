import successIcon from "../../../assets/successIcon.svg";
import blackCancel from "../../../assets/blackCancel.svg";
import { useGlobalContext } from "../../../utils/context";

export const QouteSentModal = () => {
  const { setshowSubmitSuccess } = useGlobalContext();
  return (
    <div className=" z-50 left-[50%] top-16 -translate-x-[50%] mx-auto px-2 pr-6 flex justify-between items-center  fixed border rounded-[8px] shadow-sm  border-[#E4E7EC] h-[48px] w-full max-w-[384px] bg-white">
      <span className=" rounded-tl-[4px] rounded-bl-[4px] block absolute w-[6px] h-full top-0 left-0 bg-[#04802E]"></span>
      <div className=" flex items-center  gap-x-3 ml-4 ">
        <img src={successIcon} alt="success icon" style={{ width: "24px" }} />
        <p className=" text-[#101928] font-bold">RFQ ID sent successfully!</p>
      </div>
      <div className=" flex items-center gap-x-3 ">
        <span className="inline-block border-l  h-[24px] w-[8px] border-[#F0F2F5]"></span>
        <button
          onClick={() => setshowSubmitSuccess(false)}
          className=" flex items-center justify-center h-full w-[48px]"
        >
          <img src={blackCancel} alt="cancel" />
        </button>
      </div>
    </div>
  );
};

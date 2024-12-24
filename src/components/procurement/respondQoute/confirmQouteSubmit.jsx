import { useGlobalContext } from "../../../utils/context";

export const ConfirmQouteSubmit = () => {
  const { setGlobalLoading, setshowSubmitSuccess, setShowConfirmSubmitModal } =
    useGlobalContext();

  function handleSubmit() {
    setGlobalLoading(true);

    setTimeout(() => {
      setGlobalLoading(false);
      setShowConfirmSubmitModal(false);
      setshowSubmitSuccess(true);
    }, 2000);
  }

  return (
    <div className="modalBG">
      <div className=" bg-white border w-full max-w-[568px]  rounded-lg px-6 py-8">
        <h2 className=" font-bold text-[#101928] text-xl mb-8">Confirmation</h2>
        <p className=" text-[#475367] font-medium mb-8">
          You are about to submit this quote in response to RFQ ID, this will
          immediately be sent to the client “Westend Clear Hospital”. Are you
          sure you want to proceed?
        </p>
        <div className=" flex justify-end gap-x-6 items-center text-sm font-bold">
          <button
            onClick={() => setShowConfirmSubmitModal(false)}
            className="  w-full max-w-[78px] text-[#475367] border border-[#D0D5DD] rounded-[8px] py-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primaryBlue max-w-[92px] w-full text-white rounded-[8px] py-2 flex items-center justify-center gap-x-2 h-fit"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

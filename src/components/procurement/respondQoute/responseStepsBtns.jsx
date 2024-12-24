import { useGlobalContext } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ResponseStepsBtns = ({ saveAsDraftFunction, draftName }) => {
  const {
    currentStep,
    handleContinue,
    responseJsons,
    setResponseJsons,
    setShowConfirmSubmitModal,
  } = useGlobalContext();
  const navigate = useNavigate();

  function cancelResponse() {
    localStorage.removeItem(draftName);
    navigate(-1);
    // clear all forms on cancel at last step
    if (currentStep === 3) {
      localStorage.removeItem("termsAttachmentForm");
      localStorage.removeItem("ResponseInfo");
    }
  }

  function saveDraft() {
    if (currentStep != 3) {
      saveAsDraftFunction();
    } else {
      const responseDraftFunction = responseJsons?.ResponseInfo;
      const termDraftFunction = responseJsons?.termsAttachmentForm;
      if (responseDraftFunction) {
        responseDraftFunction();
      }
      if (termDraftFunction) {
        termDraftFunction();
      }
    }
    navigate(-1);
    toast.success("Draft saved successfully");
  }

  function nextStep() {
    handleContinue();
    if (currentStep != 3) {
      // saveAsDraftFunction();
      setResponseJsons({
        ...responseJsons,
        [draftName]: saveAsDraftFunction,
      });
    }

    if (currentStep == 3) {
      setShowConfirmSubmitModal(true);
    }
  }

  return (
    <div className=" flex  font-bold gap-4  justify-end text-sm">
      <button
        onClick={cancelResponse}
        className="  w-[100px] max-w-[100px]  text-[#475367] border border-[#E4E7EC] rounded-[8px]"
      >
        Cancel
      </button>
      {/* save as draft */}
      <button
        to={"/qoute-response"}
        onClick={saveDraft}
        className=" text-primaryBlue max-w-[256px] w-[256px] border border-primaryBlue rounded-[8px]   py-2 h-fit grid place-items-center "
      >
        Save as draft
      </button>
      {/* continue */}
      <button
        onClick={nextStep}
        className="bg-primaryBlue max-w-[256px] w-[256px] text-white rounded-[8px] py-2 flex items-center justify-center gap-x-2 h-fit"
      >
        {currentStep == 3 ? "Submit" : "Continue"}
      </button>
    </div>
  );
};

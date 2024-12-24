import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../utils/context";
import { TermsAttachment } from "./termsAttachment";
import { Review } from "./review";
import { RequestInformation } from "./requestInformation";

export const RespondQoute = () => {
  const { steps, currentStep, setCurrentStep } = useGlobalContext();

  return (
    <section>
      <div className=" mb-8">
        <p className=" text-sm font-medium">
          <Link to={"/"} className=" text-primaryBlue">
            Qoutes /
          </Link>{" "}
          <span className=" text-primaryGray500">Qoute Response</span>
        </p>
      </div>

      {/*flow  */}
      <div className=" componentBorder flex overflow-auto justify-between gap-x-8 items-center mb-8">
        {steps.map(({ id, info, subtitle }) => (
          <div key={id} className=" flex shrink-0 gap-x-3 ">
            <p
              className={`w-[32px] h-[32px] rounded-full grid place-items-center font-bold ${
                currentStep === id
                  ? "bg-primaryBlue text-white"
                  : "bg-transparent text-[#98A2B3] border border-[#98A2B3]"
              }`}
            >
              {id}
            </p>
            <div>
              <button
                onClick={() => setCurrentStep(id)}
                className={` text-primaryGray900 block ${
                  currentStep === id ? "font-bold" : "font-medium"
                } `}
              >
                {info}
              </button>
              <span
                className={` text-sm  ${
                  currentStep === id ? "text-[#475367]" : "text-primaryGray500"
                } `}
              >
                {subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Content  */}
      <div>
        {currentStep == 1 && <RequestInformation />}
        {currentStep == 2 && <TermsAttachment />}
        {currentStep == 3 && <Review />}
      </div>
    </section>
  );
};

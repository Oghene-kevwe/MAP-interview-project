import { useGlobalContext } from "../../../utils/context";
import { QouteInformation } from "../qoute/qouteInformation";
import { QouteItems } from "../qoute/qouteItems";
import { QouteTermsAttachment } from "../qoute/qouteTermsAttachment";
import { ConfirmQouteSubmit } from "./confirmQouteSubmit";
import { ResponseStepsBtns } from "./responseStepsBtns";

export const Review = () => {
  const { showConfirmSubmitModal } = useGlobalContext();

  return (
    <section className=" flex flex-col gap-8">
      {showConfirmSubmitModal && <ConfirmQouteSubmit />}
      <QouteInformation review={true} />
      <QouteItems />
      <QouteTermsAttachment />
      <ResponseStepsBtns />
    </section>
  );
};

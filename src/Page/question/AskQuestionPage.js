import { FormBox } from "./Components/FormBox";
import { InfoBox } from "./Components/InfoBox";

export const AskQuestionPage = ({ goToTab }) => {
  return (
    <div className="p-2">
      <InfoBox />
      <FormBox goToTab={goToTab} />
    </div>
  );
};

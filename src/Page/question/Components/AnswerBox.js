import { ArrowUturnRightIcon } from "@heroicons/react/20/solid";
import { formatDate } from "utils/formatDate";
import { unescapeInput } from "utils/unescapeInput";

export const AnswerBox = ({ answeredDate, title, content }) => {
  return (
    <>
      <ArrowUturnRightIcon className="scale-y-[-1] w-5 h-5" />
      <div className="w-full whitespace-pre-wrap bg-blue-50 shadow-lg rounded-lg p-4">
        <div>
          <div className="flex gap-2">
            <div className="text-sm text-gray-600">
              {formatDate(answeredDate)}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="text-lg font-semibold">{unescapeInput(title)}</div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="text-base text-gray-800">
              {unescapeInput(content)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

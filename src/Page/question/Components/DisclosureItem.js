import { Disclosure } from "@headlessui/react";
import {
  ChevronRightIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/20/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlueBadge, GrayBadge } from "Components/Badges";
import { CustomBadges } from "Components/CustomBadges";
import { DELETEDisclosureItem } from "api/apiService";
import { formatDate } from "utils/formatDate";
import { unescapeInput } from "utils/unescapeInput";
export const DisclosureItem = ({
  id,
  badge,
  date,
  title,
  contents,
  isAnswer,
  answer,
}) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: DELETEDisclosureItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
    },
  });

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg  bg-blue-100 px-4 py-4 my-4 text-left text-sm font-medium text-blue-900 ">
            <div>
              <div className="flex gap-2">
                {isAnswer ? (
                  <BlueBadge badge="답변완료" />
                ) : (
                  <GrayBadge badge="답변대기" />
                )}
                <div>{formatDate(date)}</div>
              </div>
              <div className="flex gap-2 mt-2">
                <CustomBadges badge={badge} />
                <div>{unescapeInput(title)}</div>
              </div>
            </div>
            <ChevronRightIcon
              className={`${
                open ? "rotate-90 transform" : ""
              } h-5 w-5 text-blue-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
            <div className="whitespace-pre-wrap w-full mb-4">
              {unescapeInput(contents)}
            </div>
            <div className="flex flex-row-reverse">
              <button
                type="button"
                onClick={() => deleteMutation.mutate(id)}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                삭제하기
              </button>
            </div>
          </Disclosure.Panel>
          {isAnswer ? (
            <Disclosure.Panel className="flex gap-4 px-4 pb-2 pt-4 text-sm text-gray-500">
              <ArrowUturnRightIcon className="scale-y-[-1] w-5 h-5" />
              <div className="whitespace-pre-wrap">{answer}</div>
            </Disclosure.Panel>
          ) : null}
        </>
      )}
    </Disclosure>
  );
};

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlueBadge, GrayBadge } from "Components/Badges";
import { CustomBadges } from "Components/CustomBadges";
import { DELETEDisclosureItem } from "api/apiService";
import { formatDate } from "utils/formatDate";
import { unescapeInput } from "utils/unescapeInput";
import { AnswerBox } from "./AnswerBox";
import { useModalStore } from "store/useModalStore";
import { SpinnerSmallButton } from "Components/SpinnerButton";

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
  const { openModal } = useModalStore();
  const { mutate, isPending } = useMutation({
    mutationFn: DELETEDisclosureItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
      openModal("정상적으로 삭제되었습니다.");
    },
    onError: () => openModal("삭제에 실패했습니다."),
  });

  const onDeleteHandler = () => {
    // 로딩 중 얼리 리턴
    if (isPending) return;

    //데이터 mutation
    mutate(id);
  };

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
            <div className="flex flex-row-reverse h-">
              {!isAnswer && (
                <button
                  type="button"
                  onClick={onDeleteHandler}
                  className="focus:outline-none w-24 text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  {isPending ? <SpinnerSmallButton /> : "삭제하기"}
                </button>
              )}
            </div>
          </Disclosure.Panel>
          {isAnswer ? (
            <Disclosure.Panel className="flex justify-between gap-4 px-4 pb-2 pt-4 text-sm text-gray-500">
              <AnswerBox
                answeredDate={answer.answeredDate}
                title={answer.title}
                content={answer.content}
              />
            </Disclosure.Panel>
          ) : null}
        </>
      )}
    </Disclosure>
  );
};

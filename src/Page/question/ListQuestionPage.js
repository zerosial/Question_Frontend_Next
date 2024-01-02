import { GETDisclosureItems } from "api/apiService";
import { DisclosureItem } from "./Components/DisclosureItem";
import { useQuery } from "@tanstack/react-query";
import { LoadingSkeletonBox } from "Components/LoadingSkeletonBox";

export const ListQuestionPage = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["questionList"],
    queryFn: GETDisclosureItems,
  });

  if (isFetching) return <LoadingSkeletonBox />;

  if (data.length === 0) {
    return (
      <div className="w-full p-8">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
          작성한 문의 내역이 없습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        {data.map((item) => (
          <DisclosureItem
            key={item.id}
            id={item.id}
            badge={item.questionCategory}
            date={item.registeredDate}
            title={item.title}
            contents={item.content}
            isAnswer={item.answer?.isAnswer}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

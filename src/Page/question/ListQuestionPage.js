import { GETDisclosureItems } from "api/apiService";
import { DisclosureItem } from "./Components/DisclosureItem";
import { useQuery } from "@tanstack/react-query";
import { useSyncedEmailStore } from "store/useSyncedEmailStore";

export const ListQuestionPage = () => {
  const { email } = useSyncedEmailStore();
  const { isPending, error, data } = useQuery({
    queryKey: ["questionList"],
    queryFn: GETDisclosureItems,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (data.length === 0) {
    return (
      <div className="w-full p-8">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
          작성한 문의 내역이 없습니다.
        </div>
        <div>{email}</div>
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
            isAnswer={item.answer}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

import { GETDisclosureItems } from "api/apiService";
import { DisclosureItem } from "./Components/DisclosureItem";
import { useQuery } from "@tanstack/react-query";

export const ListQuestionPage = () => {
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
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        {data.map((item) => (
          <DisclosureItem
            key={item.key}
            id={item.key}
            badge={item.badge}
            date={item.date}
            title={item.title}
            contents={item.contents}
            isAnswer={item.isAnswer}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

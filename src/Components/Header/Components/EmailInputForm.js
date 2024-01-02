import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SpinnerSmallButton } from "Components/SpinnerButton";
import { GETUser, POSTUser } from "api/apiService";
import { useState } from "react";
import { useModalStore } from "store/useModalStore";
import { useSyncedEmailStore } from "store/useSyncedEmailStore";

export const EmailInputForm = () => {
  const { setEmail } = useSyncedEmailStore();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: POSTUser,
    onSuccess: () => {
      setEmail(input);
      openModal("신규 사용자입니다. 회원가입 되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
      setIsLoading(false);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });

  const onSubmitHandler = async (e) => {
    if (!e.target.checkValidity()) {
      return;
    }

    setIsLoading(true);

    if (isLoading || isPending) return;

    e.preventDefault();

    const isUser = await GETUser(input);
    if (isUser && isUser.length > 0) {
      setEmail(input);
      openModal("회원 가입된 사용자입니다. 로그인 되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
    } else {
      mutate({
        email: input,
      });
    }
  };

  return (
    <form className="flex gap-2 h-10" onSubmit={onSubmitHandler}>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
        placeholder="john.doe@company.com"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-[72px] text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center"
      >
        {isLoading || isPending ? <SpinnerSmallButton /> : "로그인"}
      </button>
    </form>
  );
};

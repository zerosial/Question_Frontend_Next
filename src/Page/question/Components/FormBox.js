import React, { useState } from "react";
import { SelectBox } from "./SelectBox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTDisclosureItem } from "api/apiService";
import { escapeInput } from "utils/escapeInput";
import { validateForm } from "utils/validateForm";
import { useModalStore } from "store/useModalStore";
import { convertKoreanToEnglish } from "utils/convertKoreanToEnglish";
import { SpinnerButton } from "./SpinnerButton";

export const FormBox = ({ goToTab }) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [selectedTabInfo, setSelectedTabInfo] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postMutation = useMutation({
    mutationFn: POSTDisclosureItem,
    onMutate: () => {
      setLoading(true); // 뮤테이션 시작 시 로딩 시작
    },
    onSuccess: () => {
      setLoading(false); // 성공 시 로딩 종료
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
      openModal("1:1 문의가 등록되었습니다.", () => {
        goToTab(1);
        setTitle("");
        setContent("");
      });
    },
    onError: () => {
      setLoading(false); // 오류 발생 시 로딩 종료
    },
  });

  const validationError = validateForm({ title, content });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // 폼 체크 (실패 예외)
    if (validationError) {
      openModal(validationError);
      return;
    }

    //데이터 mutation
    postMutation.mutate({
      title: escapeInput(title),
      content: escapeInput(content),
      questionCategory: convertKoreanToEnglish(selectedTabInfo.service),
      questionDetail: convertKoreanToEnglish(selectedTabInfo.serviceSub),
      userEmail: "user@example.com", // 사용자
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mt-4">
        <SelectBox setSelectedTabInfo={setSelectedTabInfo} />
        <input
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          placeholder="제목을 입력해주세요(50자 내)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="mt-2 p-2 w-full h-64 border border-gray-300 rounded-lg"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 p-4 rounded-lg bg-blue-500 text-white text-xl text-center"
      >
        {loading ? <SpinnerButton /> : "등록하기"}
      </button>
    </form>
  );
};

import React, { useState } from "react";
import { SelectBox } from "./SelectBox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POSTDisclosureItem } from "api/apiService";
import { getCurrentDateTime } from "utils/getCurrentDateTime";
import { escapeInput } from "utils/escapeInput";
import { validateForm } from "utils/validateForm";
import { useModalStore } from "store/useModalStore";

export const FormBox = ({ goToTab }) => {
  const { openModal } = useModalStore();
  const queryClient = useQueryClient();
  const [selectedTabInfo, setSelectedTabInfo] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postMutation = useMutation({
    mutationFn: POSTDisclosureItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["questionList"] });
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
      badge: selectedTabInfo.service,
      date: getCurrentDateTime(),
      title: escapeInput(title),
      contents: escapeInput(content),
      isAnswer: false,
      answer: null,
    });

    // 성공 팝업
    openModal("1:1 문의가 등록되었습니다.", handleModalClose);
  };

  const handleModalClose = () => {
    goToTab(1);
    setTitle("");
    setContent("");
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
        등록하기
      </button>
    </form>
  );
};

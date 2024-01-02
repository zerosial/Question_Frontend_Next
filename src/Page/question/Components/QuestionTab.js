import React from "react";

export const QuestionTab = ({ currentTab, goToTab }) => {
  const handleClick = (event) => {
    const tabIndex = Number(event.target.tabIndex);
    goToTab(tabIndex); // 부모 컴포넌트에 인덱스 전달
  };

  return (
    <div className="flex gap-2">
      <button
        tabIndex={0}
        className={`p-4 rounded-lg border-blue-300 border-2 text-center w-1/2 ${
          currentTab === 0 ? "bg-blue-100" : ""
        }`}
        onClick={handleClick}
      >
        문의하기
      </button>
      <button
        tabIndex={1}
        className={`p-4 rounded-lg border-blue-300 border-2 text-center w-1/2 ${
          currentTab === 1 ? "bg-blue-100" : ""
        }`}
        onClick={handleClick}
      >
        내 문의 내역
      </button>
    </div>
  );
};

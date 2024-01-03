import React from "react";

export const QuestionTab = ({ currentTab, goToTab }) => {
  // 슬라이더 이동을 위한 Click Handler
  const handleClick = (event) => {
    const tabIndex = Number(event.target.tabIndex);
    goToTab(tabIndex);
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

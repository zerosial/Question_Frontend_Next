export const InfoBox = () => {
  return (
    <div className="mt-4 p-4">
      <div className="text-lg font-semibold">이유에 문제가 생겼나요?</div>
      <div className="text-sm text-gray-600 mt-1">
        자주 묻는 질문에서 해결할 수도 있어요!
      </div>
      <button className="mt-2 text-blue-500" variant="ghost">
        자주 묻는 질문 바로가기
      </button>
    </div>
  );
};

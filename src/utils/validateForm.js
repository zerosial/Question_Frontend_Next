export const validateForm = ({ title, content }) => {
  if (title.length > 50) return "제목이 50자를 넘어갑니다. 제목을 수정해주세요";
  if (title.length === 0) return "제목을 입력 해주세요";
  if (content.length === 0) return "내용을 입력 해주세요";
  return "";
};

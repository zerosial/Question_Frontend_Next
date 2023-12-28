import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InfoBox } from "../Page/question/Components/InfoBox";

describe("InfoBox 컴포넌트", () => {
  const renderInfoBox = () => render(<InfoBox />);

  test("컴포넌트가 정상적으로 렌더링 되는지 확인", () => {
    renderInfoBox();
    expect(screen.getByText("이유에 문제가 생겼나요?")).toBeInTheDocument();
    expect(
      screen.getByText("자주 묻는 질문에서 해결할 수도 있어요!")
    ).toBeInTheDocument();
    expect(screen.getByText("자주 묻는 질문 바로가기")).toBeInTheDocument();
  });
});

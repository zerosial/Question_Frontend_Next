import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectBox } from "../Page/question/Components/SelectBox";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { SELECT_OPTION } from "utils/constants";

// MSW 서버 설정

describe("SelectBox 컴포넌트", () => {
  const renderSelectBox = () =>
    render(<SelectBox setSelectedTabInfo={() => null} />);

  test("SELECT_OPTION의 각 키 값이 렌더링되는지 확인", () => {
    renderSelectBox();

    Object.keys(SELECT_OPTION).forEach((key) => {
      const elements = screen.getAllByText(key);
      elements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  test("옵션 박스 첫번째 것을 변경하면 반영되는지 확인", () => {
    const mockSetSelectedTabInfo = jest.fn();
    render(<SelectBox setSelectedTabInfo={mockSetSelectedTabInfo} />);

    // data-testid를 사용하여 첫 번째 select 요소를 가져옵니다.
    const serviceSelect = screen.getByTestId("service-main");

    Object.keys(SELECT_OPTION).forEach((key) => {
      // 각 옵션의 이름을 선택합니다.
      // eslint-disable-next-line testing-library/no-unnecessary-act
      act(() => {
        userEvent.selectOptions(serviceSelect, key);
      });

      // 상태 변경 확인을 위한 mock 함수가 호출되었는지 확인합니다.
      expect(mockSetSelectedTabInfo).toHaveBeenCalledWith({
        service: key,
        serviceSub: expect.any(String), // 첫 번째 서브 옵션
      });
    });
  });
});

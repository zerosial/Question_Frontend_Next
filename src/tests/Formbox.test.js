import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FormBox } from "../Page/question/Components/FormBox";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import { clearDisclosureItems } from "mocks/disclosureStore";

// MSW 서버 설정
export const server = setupServer(...handlers);

server.events.on("request:start", ({ request }) => {
  console.log("MSW intercepted:", request.method, request.url);
});

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  clearDisclosureItems();
});

describe("FormBOX 컴포넌트", () => {
  const mockGoToTab = jest.fn();
  const queryClient = new QueryClient();

  // 컴포넌트 렌더링을 위한 유틸리티 함수
  const renderFormBox = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <FormBox goToTab={mockGoToTab} />
      </QueryClientProvider>
    );

  test("컴포넌트가 정상적으로 렌더링 되는지 확인", () => {
    renderFormBox();
    expect(
      screen.getByPlaceholderText("제목을 입력해주세요(50자 내)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("내용을 입력해주세요")
    ).toBeInTheDocument();
    expect(screen.getByText("등록하기")).toBeInTheDocument();
  });

  test("사용자 입력에 따라 제목과 내용 상태가 업데이트 되는지 확인", () => {
    renderFormBox();
    const titleInput =
      screen.getByPlaceholderText("제목을 입력해주세요(50자 내)");
    const contentInput = screen.getByPlaceholderText("내용을 입력해주세요");

    fireEvent.change(titleInput, { target: { value: "새로운 제목" } });
    expect(titleInput.value).toBe("새로운 제목");

    fireEvent.change(contentInput, { target: { value: "새로운 내용" } });
    expect(contentInput.value).toBe("새로운 내용");
  });

  test("폼 제출 시 성공 메시지가 표시되는지 확인", async () => {
    renderFormBox();

    const titleInput =
      screen.getByPlaceholderText("제목을 입력해주세요(50자 내)");
    const contentInput = screen.getByPlaceholderText("내용을 입력해주세요");
    const submitButton = screen.getByText("등록하기");

    fireEvent.change(titleInput, { target: { value: "새로운 제목" } });
    fireEvent.change(contentInput, { target: { value: "새로운 내용" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("1:1 문의가 등록되었습니다.")
      ).toBeInTheDocument();
    });
  });

  test("제목 입력 필드가 비어있을 경우 경고 메시지가 표시되는지 확인", async () => {
    renderFormBox();

    const submitButton = screen.getByText("등록하기");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("제목을 입력 해주세요")).toBeInTheDocument();
    });
  });

  test("내용 입력 필드가 비어있을 경우 경고 메시지가 표시되는지 확인", async () => {
    renderFormBox();

    const titleInput =
      screen.getByPlaceholderText("제목을 입력해주세요(50자 내)");
    fireEvent.change(titleInput, { target: { value: "새로운 제목" } });

    const submitButton = screen.getByText("등록하기");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("내용을 입력 해주세요")).toBeInTheDocument();
    });
  });

  test("제목 입력이 50자를 넘을 경우 경고 메시지가 표시되는지 확인", async () => {
    renderFormBox();

    const titleInput =
      screen.getByPlaceholderText("제목을 입력해주세요(50자 내)");
    fireEvent.change(titleInput, { target: { value: "a".repeat(51) } });

    const submitButton = screen.getByText("등록하기");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("제목이 50자를 넘어갑니다. 제목을 수정해주세요")
      ).toBeInTheDocument();
    });
  });
});

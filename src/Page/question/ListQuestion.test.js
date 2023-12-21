import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import { clearDisclosureItems } from "mocks/disclosureStore";
import { ListQuestionPage } from "./ListQuestionPage";

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

describe("ListQuestionPage 컴포넌트", () => {
  const queryClient = new QueryClient();

  const renderListQuestionPage = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <ListQuestionPage />
      </QueryClientProvider>
    );

  test("컴포넌트가 정상적으로 렌더링 되는지 확인", async () => {
    renderListQuestionPage();

    // 로딩 상태 테스트
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("데이터 불러오기 후 데이터가 없을 경우 확인", async () => {
    renderListQuestionPage();

    // 로딩 상태가 사라짐을 확인
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });

    expect(
      screen.getByText(/작성한 문의 내역이 없습니다./i)
    ).toBeInTheDocument();
  });
});

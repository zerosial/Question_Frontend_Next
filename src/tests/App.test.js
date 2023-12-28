import "@testing-library/jest-dom";
import { POSTDisclosureItem } from "api/apiService";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import {
  clearDisclosureItems,
  getDisclosureItems,
} from "mocks/disclosureStore";

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

describe("Disclosure Items API - POST TEST", () => {
  test("POST TEST", async () => {
    const newItem = {
      test: "test",
    };
    // POST 요청
    await POSTDisclosureItem(newItem);

    // 내부 저장소 값 불러오기
    const items = getDisclosureItems();
    expect(items[items.length - 1]).toEqual(expect.objectContaining(newItem));
  });

  /* test("GET TEST", async () => {
    // mock 테스트 보류
    const newItem = {
      test: "test",
    };

    addDisclosureItem(newItem);

    const items = await GETDisclosureItems();
    expect(await items.json()).toEqual(newItem);
  }); */
});

const { escapeInput } = require("./escapeInput");

describe("escapeInput 함수", () => {
  test("앰퍼샌드(&) 이스케이프 처리 확인", () => {
    expect(escapeInput("테스트 & 테스트")).toBe("테스트 &amp; 테스트");
  });

  test("미만 부호(<) 이스케이프 처리 확인", () => {
    expect(escapeInput("테스트 < 테스트")).toBe("테스트 &lt; 테스트");
  });

  test("초과 부호(>) 이스케이프 처리 확인", () => {
    expect(escapeInput("테스트 > 테스트")).toBe("테스트 &gt; 테스트");
  });

  test('쌍따옴표(") 이스케이프 처리 확인', () => {
    expect(escapeInput('테스트 " 테스트')).toBe("테스트 &quot; 테스트");
  });

  test("홑따옴표(') 이스케이프 처리 확인", () => {
    expect(escapeInput("테스트 ' 테스트")).toBe("테스트 &#039; 테스트");
  });

  test("여러 특수 문자 이스케이프 처리 확인", () => {
    expect(escapeInput('<&">')).toBe("&lt;&amp;&quot;&gt;");
  });
});

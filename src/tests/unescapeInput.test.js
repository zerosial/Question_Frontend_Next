const { unescapeInput } = require("../utils/unescapeInput");

describe("unescapeInput 함수", () => {
  test("앰퍼샌드(&amp;) 복원 처리 확인", () => {
    expect(unescapeInput("테스트 &amp; 테스트")).toBe("테스트 & 테스트");
  });

  test("미만 부호(&lt;) 복원 처리 확인", () => {
    expect(unescapeInput("테스트 &lt; 테스트")).toBe("테스트 < 테스트");
  });

  test("초과 부호(&gt;) 복원 처리 확인", () => {
    expect(unescapeInput("테스트 &gt; 테스트")).toBe("테스트 > 테스트");
  });

  test("쌍따옴표(&quot;) 복원 처리 확인", () => {
    expect(unescapeInput("테스트 &quot; 테스트")).toBe('테스트 " 테스트');
  });

  test("홑따옴표(&#039;) 복원 처리 확인", () => {
    expect(unescapeInput("테스트 &#039; 테스트")).toBe("테스트 ' 테스트");
  });

  test("여러 이스케이프 문자 복원 처리 확인", () => {
    expect(unescapeInput("&lt;&amp;&quot;&gt;")).toBe('<&">');
  });
});

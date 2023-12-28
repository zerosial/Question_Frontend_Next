const { getCurrentDateTime } = require("../utils/getCurrentDateTime");

describe("getCurrentDateTime 함수 테스트", () => {
  test("현재 날짜와 시간이 올바른 형식으로 반환되는지 확인", () => {
    const result = getCurrentDateTime();

    // 정규표현식을 사용하여 반환된 문자열의 형식을 검증
    const dateTimeFormat = /^\d{4}년 \d{2}월 \d{2}일 \d{2}:\d{2}:\d{2}$/;
    expect(result).toMatch(dateTimeFormat);

    // 반환된 문자열의 길이가 일정한지 확인
    expect(result.length).toBe(22); // "YYYY년 MM월 DD일 HH:MM:SS"의 길이는 21자
  });
});

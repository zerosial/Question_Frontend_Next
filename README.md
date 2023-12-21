# 문의하기 페이지

MSW, Jest 를 활용한 기본적인 CRUD 페이지 개발해보기

### 스크린샷

![chrome_W0GZt0F0jg](https://github.com/PINEONE-WEB/web-study/assets/97251710/24eda4a3-b8c0-4922-aa5e-ee72a99d00c5)


## 사용 기술

- React (Create React App)
- Tanstack-Query V5
- Axios
- Mock Service Worker
- Jest (testing-library/react, jest-stare)
- TailwindCSS (headlessui, heroicons, react-slick)

## 설치&실행 방법

```sh
npm i
npm run start
```

## 설치&실행 방법

```sh
npm run test
내부 문구에서 a를 누르면 전체 테스트
```

테스트를 1회 시행한 후에 리포트가 자동 생성됩니다.
하단 명령어를 통해 확인할 수 있습니다.

```sh
npm run report
```

### 스크린샷
![chrome_MIBkfXtrhY](https://github.com/PINEONE-WEB/web-study/assets/97251710/b0dfc422-b11c-4aae-a1ff-df605302c47b)


## 기능 상세

1. 선택 가능한 SelectBox
2. 문의하기 및 문의 리스트 탭구조
3. [POST] 문의하기 클릭시
4. [GET] 문의 리스트
5. [DELETE] 문의 리스트 삭제
6. 문의 단계 예외처리
7. MSW를 기반으로 온라인 상태가 아니더라도 사용가능 (현재는 MSW만 연결된 상태)
8. JEST 테스트를 통해 테스트 및 결과 리포팅

## 기능 구현 스크린샷
![chrome_XMuZnEsFA4](https://github.com/PINEONE-WEB/web-study/assets/97251710/adcd7748-e392-4e63-b9cf-09ec66bbddaf)
![chrome_fnNW91cY3K](https://github.com/PINEONE-WEB/web-study/assets/97251710/6fda57ea-384f-4fd3-b844-12b92759219c)



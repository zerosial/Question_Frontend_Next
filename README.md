# 문의하기 페이지

v1.0 MSW, Jest 를 활용한 기본적인 CRUD 페이지 개발해보기
v1.1 기존 개발한 페이지에 API 및 추가 기능 연동 및 리팩터링

- close #13

### 스크린샷 (기존)

![chrome_W0GZt0F0jg](https://github.com/PINEONE-WEB/web-study/assets/97251710/24eda4a3-b8c0-4922-aa5e-ee72a99d00c5)

### 2회차 PR 기능추가 스크린샷

![chrome_diBJJ2tS1c](https://github.com/PINEONE-WEB/web-study/assets/97251710/de1166f2-8799-4e6d-83a2-d6d3b04ba318)

## 사용 기술

- React (Create React App)
- Tanstack-Query V5
- Axios
- Mock Service Worker
- Jest (testing-library/react, jest-stare)
- TailwindCSS (headlessui, heroicons, react-slick)
- Zustand

## 설치&실행 방법

기본적으로 프로젝트 폴더로 이동 후 실행하여야 합니다.

```sh
cd 2회차
cd 백승훈
```

설치 및 실행

```sh
npm i
npm run start
```

## 테스트 (Jest)

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

## 기능 상세 (1회차)

1. 선택 가능한 SelectBox
2. 문의하기 및 문의 리스트 탭구조
3. [POST] 문의하기 클릭시
4. [GET] 문의 리스트
5. [DELETE] 문의 리스트 삭제
6. 문의 단계 예외처리
7. MSW를 기반으로 온라인 상태가 아니더라도 사용가능 (현재는 MSW만 연결된 상태)
8. JEST 테스트를 통해 테스트 및 결과 리포팅

## 기능 상세 (2회차)

1. Zustand를 통한 상태관리
2. 실 Api 연결
3. 로그인 로그아웃 회원가입 로직 구현

## 기능 구현 스크린샷

![chrome_XMuZnEsFA4](https://github.com/PINEONE-WEB/web-study/assets/97251710/adcd7748-e392-4e63-b9cf-09ec66bbddaf)
![chrome_fnNW91cY3K](https://github.com/PINEONE-WEB/web-study/assets/97251710/6fda57ea-384f-4fd3-b844-12b92759219c)

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextDecoder, TextEncoder } from "util";

// 텍스트 인코딩 & 디코딩
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// 특정 ui를 테스트하기 위한 mock
jest.mock("@headlessui/react", () => {
  // Disclosure
  const Disclosure = ({ children }) => children;
  Disclosure.Button = ({ children }) => <button>{children}</button>;
  Disclosure.Panel = ({ children }) => <div>{children}</div>;

  // 다른 Dialog 컴포넌트도 필요한 경우 여기에 추가
  const Dialog = ({ children }) => children;
  Dialog.Panel = ({ children }) => <div>{children}</div>;
  Dialog.Title = ({ children }) => <h3>{children}</h3>;

  // Transition
  const Transition = ({ children }) => children;
  Transition.Child = ({ children }) => <>{children}</>;
  return { Disclosure, Dialog, Transition };
});

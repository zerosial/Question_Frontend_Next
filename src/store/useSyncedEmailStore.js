import { useSyncExternalStore } from "react";
import { create } from "zustand";

// 이메일을 관리하는 Store
export const useEmailStore = create((set) => ({
  email: "",
  setEmail: (newEmail) => set({ email: newEmail }),
}));

// React 18버전의 Zombie Child 방지를 위한 함수
export const useSyncedEmailStore = () => {
  const store = useEmailStore;

  const state = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getState
  );

  return state;
};

import { create } from "zustand";

// 모달을 관리하는 Store
export const useModalStore = create((set) => ({
  isModalOpen: false,
  modalContent: "",
  onCloseCallback: null,
  openModal: (content, onCloseCallback = null) =>
    set({ isModalOpen: true, modalContent: content, onCloseCallback }),
  closeModal: () =>
    set((state) => {
      if (state.onCloseCallback) {
        state.onCloseCallback();
      }
      return { isModalOpen: false, onCloseCallback: null };
    }),
}));

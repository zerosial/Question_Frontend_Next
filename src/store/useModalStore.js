import { create } from "zustand";

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

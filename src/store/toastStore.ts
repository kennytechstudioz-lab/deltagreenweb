import { create } from "zustand";

interface ToastState {
  message: string | null;
  type: "success" | "error" | "warning";
  showToast: (message: string, type?: "success" | "error" | "warning") => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  message: null,
  type: "error",
  showToast: (message, type = "error") => {
    set({ message, type });
  },
  hideToast: () => set({ message: null }),
}));

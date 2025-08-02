import { create } from "zustand";

export const useStepStore = create((set) => ({
  currentStep: 1,
  maxStep: 16,

  // Navigate to next step
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.maxStep),
    })),

  // Navigate to previous step
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),
}));

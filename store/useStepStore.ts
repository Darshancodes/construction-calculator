import { create } from "zustand";

// Step store state interface
interface StepStoreState {
  currentStep: number;
  maxStep: number;
}

// Step store actions interface
interface StepStoreActions {
  nextStep: () => void;
  prevStep: () => void;
  stepChange: (id: number) => void;
}

// Combined step store type
type StepStore = StepStoreState & StepStoreActions;

// Step store implementation
export const useStepStore = create<StepStore>((set) => ({
  currentStep: 1,
  maxStep: 15,
  stepChange: (id) => set((state) => ({ currentStep: id })),
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

export type { StepStoreState, StepStoreActions, StepStore };

// export const useStepStore = create((set) => ({
//   currentStep: 1,
//   maxStep: 16,

//   // Navigate to next step
//   nextStep: () =>
//     set((state) => ({
//       currentStep: Math.min(state.currentStep + 1, state.maxStep),
//     })),

//   // Navigate to previous step
//   prevStep: () =>
//     set((state) => ({
//       currentStep: Math.max(state.currentStep - 1, 1),
//     })),
// }));

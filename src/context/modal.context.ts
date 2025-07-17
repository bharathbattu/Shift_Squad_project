import { createContext } from 'react';

export interface ModalContextType {
  isConsultationFormOpen: boolean;
  openConsultationForm: () => void;
  closeConsultationForm: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined); 
import { useState, ReactNode } from 'react';
import { ModalContext } from './modal.context';

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isConsultationFormOpen, setConsultationFormOpen] = useState(false);

  const openConsultationForm = () => setConsultationFormOpen(true);
  const closeConsultationForm = () => setConsultationFormOpen(false);

  return (
    <ModalContext.Provider value={{ isConsultationFormOpen, openConsultationForm, closeConsultationForm }}>
      {children}
    </ModalContext.Provider>
  );
} 
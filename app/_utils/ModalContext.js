"use client"

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ visible, setVisible }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
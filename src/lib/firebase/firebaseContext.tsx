"use client";

import React, { createContext, useContext, type ReactNode } from "react";
import { auth } from "../firebase/config";
import { Auth } from "firebase/auth";

interface FirebaseContextType{
    auth: Auth;
}
const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
}

export const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FirebaseContext.Provider value={{ auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
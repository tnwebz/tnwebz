"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface AdminContextType {
  isAdmin: boolean;
  toggleAdmin: () => void;
  setAdmin: (status: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Load from session storage so it expires when tab closes
    const stored = sessionStorage.getItem("tnwebz_admin_mode");
    if (stored === "true") {
      setIsAdmin(true);
    }
  }, []);

  const setAdmin = (status: boolean) => {
    setIsAdmin(status);
    sessionStorage.setItem("tnwebz_admin_mode", status.toString());
  };

  const toggleAdmin = () => {
    setAdmin(!isAdmin);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}

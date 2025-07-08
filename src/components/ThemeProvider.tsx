import React, { createContext, useContext } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProviderContext = createContext<null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);

  return (
    <ThemeProviderContext.Provider value={null}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  // No-op, theme is always dark
  return { theme: "dark" };
};
"use client";

import * as React from "react";
// Custom ThemeProvider for per-tab theme (no localStorage/global sync)
import { createContext, useContext, useState } from "react";

// Defines a type for "light" or "dark" themes and a context interface for managing theme changes. 🌞🌙

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// A function to provide theme context, managing light/dark mode and saving preferences in sessionStorage 🌙🌞
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored as Theme;
    }
    return "light";
  });

  // Set theme class on html element
  React.useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("theme", theme);
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    // sessionStorage update handled by useEffect
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// This function retrieves the theme context and ensures it's used within a ThemeProvider. 🎨🔧
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

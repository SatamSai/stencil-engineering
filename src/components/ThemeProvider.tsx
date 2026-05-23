"use client";

import * as React from "react";
import { THEMES, ThemeConfig } from "@/data/themes";

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (id: string) => void;
  themes: ThemeConfig[];
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeConfig>(THEMES[0]);
  const [mounted, setMounted] = React.useState(false);

  // Apply theme variables to document
  const applyTheme = (theme: ThemeConfig) => {
    const root = document.documentElement;
    
    // Map colors to CSS variables
    const colorMap: Record<string, string> = {
      pageBg: "--bg",
      sections: "--bg-2",
      navFooter: "--bg-nav",
      mainText: "--ink",
      secondaryText: "--ink-2",
      accent: "--accent",
      line: "--line"
    };

    Object.entries(theme.colors).forEach(([key, value]) => {
      const varName = colorMap[key];
      if (varName) root.style.setProperty(varName, value);
    });

    // Map fonts
    root.style.setProperty("--font-heading", theme.fonts.heading);
    root.style.setProperty("--font-body", theme.fonts.body);
  };

  React.useEffect(() => {
    setMounted(true);
    const foundTheme = THEMES[0];
    setCurrentTheme(foundTheme);
    applyTheme(foundTheme);
  }, []);

  const handleSetTheme = (id: string) => {
    const theme = THEMES.find(t => t.id === id);
    if (theme) {
      setCurrentTheme(theme);
      applyTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleSetTheme, themes: THEMES }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

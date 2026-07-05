"use client";

import * as React from "react";
import { THEMES, ThemeConfig } from "@/data/themes";

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (id: string) => void;
  themes: ThemeConfig[];
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

// Map theme color keys to CSS variables
const COLOR_VAR_MAP: Record<string, string> = {
  pageBg: "--bg",
  secondaryPageBg: "--bg-alt",
  sections: "--bg-2",
  navFooter: "--bg-nav",
  mainText: "--ink",
  secondaryText: "--ink-2",
  accent: "--accent",
  line: "--line"
};

function themeToCssVars(theme: ThemeConfig): Record<string, string> {
  const vars: Record<string, string> = {
    "--font-heading": theme.fonts.heading,
    "--font-body": theme.fonts.body
  };
  Object.entries(theme.colors).forEach(([key, value]) => {
    const varName = COLOR_VAR_MAP[key];
    if (varName && value) vars[varName] = value;
  });
  return vars;
}

function applyTheme(theme: ThemeConfig) {
  const root = document.documentElement;
  Object.entries(themeToCssVars(theme)).forEach(([varName, value]) => {
    root.style.setProperty(varName, value);
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeConfig>(THEMES[0]);

  const handleSetTheme = (id: string) => {
    const theme = THEMES.find(t => t.id === id);
    if (theme) {
      setCurrentTheme(theme);
      applyTheme(theme);
    }
  };

  // Applied via an inline script (below) before paint, so this only matters
  // for theme switches after mount.
  const noFlashScript = `(function(){var s=document.documentElement.style,v=${JSON.stringify(
    themeToCssVars(currentTheme)
  )};for(var k in v){s.setProperty(k,v[k]);}})();`;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleSetTheme, themes: THEMES }}>
      <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

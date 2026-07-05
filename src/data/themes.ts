export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    pageBg: string;
    secondaryPageBg?: string;
    sections: string;
    navFooter: string;
    mainText: string;
    secondaryText: string;
    accent: string;
    line: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const THEMES: ThemeConfig[] = [
  {
    id: "editorial",
    name: "Editorial",
    colors: {
      pageBg: "#ffffff",
      secondaryPageBg: "#edededb8",
      sections: "#2b5573",
      navFooter: "#f5f1ea",
      mainText: "#1c1a17",
      secondaryText: "#4a463f",
      accent: "#2b5573",
      line: "#d9d2c4"
    },
    fonts: {
      heading: "var(--font-neue-haas)",
      body: "var(--font-neue-haas)"
    }
  }
];

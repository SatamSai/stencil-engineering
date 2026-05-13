export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    pageBg: string;
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
      sections: "#ece6db",
      navFooter: "#f5f1ea",
      mainText: "#1c1a17",
      secondaryText: "#4a463f",
      accent: "#3D3A8C",
      line: "#d9d2c4"
    },
    fonts: {
      heading: "var(--font-space-grotesk)",
      body: "var(--font-space-grotesk)"
    }
  },
  {
    id: "editorial-outfit",
    name: "Editorial Outfit",
    colors: {
      pageBg: "#ffffff",
      sections: "#ece6db",
      navFooter: "#f5f1ea",
      mainText: "#1c1a17",
      secondaryText: "#4a463f",
      accent: "#3D3A8C",
      line: "#d9d2c4"
    },
    fonts: {
      heading: "var(--font-outfit)",
      body: "var(--font-outfit)"
    }
  },
  {
    id: "coastal-med",
    name: "Coastal Modern (Outfit)",
    colors: {
      pageBg: "#F7F5F1",
      sections: "#DCE5E3",
      navFooter: "#274046",
      mainText: "#1F2A30",
      secondaryText: "#6B777B",
      accent: "#B88B5E",
      line: "rgba(31, 42, 48, 0.1)"
    },
    fonts: {
      heading: "var(--font-caslon)",
      body:  "var(--font-caslon)"
    }
  },
  {
    id: "coastal-inter",
    name: "Coastal (Inter)",
    colors: {
      pageBg: "#F7F5F1",
      sections: "#DCE5E3",
      navFooter: "#274046",
      mainText: "#1F2A30",
      secondaryText: "#6B777B",
      accent: "#B88B5E",
      line: "rgba(31, 42, 48, 0.1)"
    },
    fonts: {
      heading: "var(--font-outfit)",
      body: "var(--font-outfit)"
    }
  },
  {
    id: "coastal-jakarta",
    name: "Coastal (Jakarta)",
    colors: {
      pageBg: "#F7F5F1",
      sections: "#DCE5E3",
      navFooter: "#274046",
      mainText: "#1F2A30",
      secondaryText: "#6B777B",
      accent: "#B88B5E",
      line: "rgba(31, 42, 48, 0.1)"
    },
    fonts: {
      heading: "var(--font-caslon)",
      body: "var(--font-caslon)"
    }
  },
{
  id: "architectural-general",
  name: "Architectural (General Sans)",
  colors: {
    pageBg: "#F4F1EC",
    sections: "#DDE5E7",
    navFooter: "#27364A",
    mainText: "#1F2328",
    secondaryText: "#66707A",
    accent: "#1D4D8F",
    line: "rgba(31, 35, 40, 0.08)"
  },
  fonts: {
    heading: "var(--font-general-sans)",
    body: "var(--font-general-sans)"
  }
},
{
  id: "editorial-inter",
  name: "Editorial (Inter)",
  colors: {
    pageBg: "#f5f1ea",
    sections: "#ece6db",
    navFooter: "#ffffff",
    mainText: "#1c1a17",
    secondaryText: "#4a463f",
    accent: "#3D3A8C",
    line: "#d9d2c4"
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)"
  }
},
{
  id: "luxury-satoshi",
  name: "Luxury (Satoshi)",
  colors: {
    pageBg: "#F6F1EB",
    sections: "#E4DDD4",
    navFooter: "#2B2F36",
    mainText: "#1F1F1F",
    secondaryText: "#726B63",
    accent: "#A1845E",
    line: "rgba(0,0,0,0.08)"
  },
  fonts: {
    heading: "var(--font-satoshi)",
    body: "var(--font-satoshi)"
  }
},
{
  id: "luxury-manrope",
  name: "Luxury (Manrope)",
  colors: {
    pageBg: "#F6F1EB",
    sections: "#E4DDD4",
    navFooter: "#2B2F36",
    mainText: "#1F1F1F",
    secondaryText: "#726B63",
    accent: "#A1845E",
    line: "rgba(0,0,0,0.08)"
  },
  fonts: {
    heading: "var(--font-manrope)",
    body: "var(--font-manrope)"
  }
}
];

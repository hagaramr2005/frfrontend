/**
 * Phronesis Design Tokens
 * Single source of truth for color, type, spacing, motion, and layout primitives.
 * Every component should reference these — never hardcode a raw value.
 */

export const colors = {
  forest: {
    500: "#2E4F3E", // primary brand
    900: "#16281F", // dark "chapter" sections
  },
  sage: {
    100: "#EDF1E7",
    500: "#A3B18A", // secondary / growth hint
    700: "#6F7F5B",
  },
  copper: {
    400: "#C68A50",
    500: "#B87333", // accent — the only color allowed to pull the eye aggressively
    700: "#8C5626", // CTA fill, white-text safe
  },
  ivory: {
    25: "#F8F7F3", // page background
    50: "#F5F2EC",
  },
  linen: {
    50: "#F1EDE4", // chapter-shift background
  },
  stone: {
    200: "#F0EDE7",
    300: "#DFDAD0", // borders
    400: "#B9B2A4",
    500: "#8C8577", // soft surface
  },
  surface: "#EAE7E1", // soft stone surface
  ink: {
    400: "#5F6B6D", // text secondary / slate gray
    500: "#2C2C2C", // text primary / charcoal
  },
  twilight: {
    100: "#E4EAF0",
    500: "#42627D",
    700: "#33506A",
  },
  rosewood: {
    100: "#EFDFDA",
  },
  success: "#1F5C34",
  warning: "#B08A2E",
  error: "#A33A2F",
  info: "#42627D",
} as const;

export const typography = {
  fontFamily: {
    enHeading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
    enBody: 'Inter, -apple-system, "Helvetica Neue", Arial, sans-serif',
    arHeading: '"Thmanyah Serif Display", "Noto Serif Arabic", serif',
    arBody: '"IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif',
  },
  scale: {
    display1: "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
    display2: "clamp(2.125rem, 4vw + 1rem, 3.5rem)",
    h1: "clamp(1.875rem, 3vw + 1rem, 2.75rem)",
    h2: "clamp(1.75rem, 2.5vw + 1rem, 2.125rem)",
    h3: "clamp(1.375rem, 1.5vw + 1rem, 1.625rem)",
    h4: "clamp(1.25rem, 1vw + 1rem, 1.375rem)",
    bodyLg: "clamp(1.0625rem, 0.5vw + 1rem, 1.1875rem)",
    body: "clamp(0.9375rem, 0.5vw + 0.85rem, 1rem)",
    bodySm: "0.875rem",
    label: "0.8125rem",
    monoDetail: "0.75rem",
  },
} as const;

export const spaceUnit = 8;

export const spacing = {
  sectionPadding: { desktop: 120, tablet: 80, mobile: 56 },
  gutter: { desktop: 64, tablet: 40, mobile: 24 },
};

export const radius = { sm: 4, md: 8, lg: 16 };

export const shadow = {
  cardHover: "0 4px 12px rgba(43,43,43,0.06)",
  modal: "0 12px 32px rgba(43,43,43,0.14)",
};

export const opacity = { texture: 0.06, disabled: 0.5, backdrop: 0.6 };

export const zIndex = { nav: 100, dropdown: 200, modalBackdrop: 300, modal: 310, toast: 400 };

export const containers = { copy: 680, section: 1200, narrow: 720 };

export const motion = {
  duration: { fast: 0.15, normal: 0.2, slow: 0.6, slower: 0.7, reduced: 0.15 },
  easing: {
    standard: [0.4, 0, 0.2, 1] as [number, number, number, number],
    emphasized: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

export const breakpoints = { mobile: 0, tablet: 640, laptop: 1024, desktop: 1440 };

export const icon = { xs: 14, sm: 16, md: 20, lg: 24, xl: 32 };

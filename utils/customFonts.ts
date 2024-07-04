import localFont from "next/font/local";

export const HeadersFont = localFont({
  src: [{ path: "../assets/fonts/GaMaamli-Regular.ttf" }],
  display: "swap",
  variable: "--font-headings",
  style: "normal",
});

export const BodyFonts = localFont({
  src: [{ path: "../assets/fonts/Raleway-VariableFont_wght.ttf" }],
  display: "swap",
  variable: "--font-body",
  style: "normal",
  weight: "400",
});

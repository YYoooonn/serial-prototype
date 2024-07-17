import { style, createVar } from "@vanilla-extract/css";

export const buttonColor = createVar();
export const textColor = createVar();

export const titleOverlay = style({
  color: textColor,
  position: "absolute",
  top: "20px",
  left: "20px",
  fontSize: "16px",
  background: "transparent",
  zIndex: 999,
});

export const transBackground = style({
  background: "transparent",
});

export const darkButton = style({
  background: buttonColor,
  color: textColor,
});

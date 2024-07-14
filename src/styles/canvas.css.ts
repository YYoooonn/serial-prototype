import { style } from "@vanilla-extract/css";

export const canvas = style({
  display: "absolute",
  width: "100vw",
  height: "100vh",
  touchAction: "auto !important",
});

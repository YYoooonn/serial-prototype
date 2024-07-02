import { style } from "@vanilla-extract/css";
import * as palette from "@/styles/palettes.json"

export const title = style({
  position: "relative",
  marginTop: "20px",
  marginLeft: "20px",
  fontSize: "20px",
});

export const titleOverlay = style({
  position: "absolute",
  top: "20px",
  left: "20px",
  fontSize: "16px",
});

export const linkActivated = style({
  display: "flex",
  marginTop: "8px",
  marginLeft: "20px",
  fontSize: "16px",
  color: "white",
  ":hover": {
    color: "red",
  },
});

export const linkDeactivated = style({
  display: "flex",
  marginTop: "8px",
  marginLeft: "20px",
  fontSize: "16px",
  color: palette.gray5,
  pointerEvents: "none",
});

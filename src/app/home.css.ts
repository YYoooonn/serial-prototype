import { style } from "@vanilla-extract/css";
import * as palette from "@/styles/palettes.json";

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
  background: "transparent",
  zIndex: 999,
});

export const transBackground = style({
  background: "transparent",
});

export const landingTable = style({
  display: "table",
  tableLayout: "fixed",
  width: "100vw",
});

export const tableRow = style({
  display: "table-row",
});

export const tableCell = style({
  display: "table-cell",
  // paddingLeft: "20px",
  // paddingTop: "8px"
});

export const testlinkActivated = style({
  display: "flex",
  paddingTop: "8px",
  paddingLeft: "20px",
  fontSize: "16px",
  color: "white",
  ":hover": {
    color: "blue",
  },
});

export const linkActivated = style({
  display: "flex",
  paddingTop: "8px",
  paddingLeft: "20px",
  fontSize: "16px",
  color: "white",
  ":hover": {
    color: "red",
  },
});

export const linkDeactivated = style({
  display: "flex",
  paddingTop: "8px",
  paddingLeft: "20px",
  fontSize: "16px",
  color: palette.gray5,
  pointerEvents: "none",
});

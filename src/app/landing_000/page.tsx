"use client";

import { PRJTCanvas } from "./canvas";
import { useState } from "react";
import * as styles from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export default function Home() {
  const [isDark, setDark] = useState(true);
  return (
    <main>
      <PRJTCanvas dark={isDark} />
      <div className={styles.titleOverlay}>
        <div>LANDING_000 : MATRIX</div>
        <button
          className={styles.darkButton}
          style={assignInlineVars({
            [styles.buttonColor]: isDark ? "#000000" : "#FFFFFF",
            [styles.textColor]: isDark ? "#FFFFFF" : "#000000",
          })}
          onClick={() => setDark(!isDark)}
        >
          black white toggle
        </button>
      </div>
    </main>
  );
}

"use client";

import * as styles from "../home.css";
import Link from "next/link";
import { PRJTCanvas } from "./canvas";
import { useState } from "react";

export default function Home() {
  const [isDark, setDark] = useState(true);
  return (
    <main>
      <PRJTCanvas dark={isDark} />
      <div className={styles.titleOverlay}>
        <div className={styles.transBackground}>LANDING_000 : MATRIX</div>
        <button onClick={() => setDark(!isDark)}>black white toggle</button>
      </div>
    </main>
  );
}

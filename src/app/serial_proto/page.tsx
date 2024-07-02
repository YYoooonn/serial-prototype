"use client";

import { PRJTCanvas } from "@/components/Canvas";
import * as styles from "../home.css";

export default function SerialProto() {
  return (
    <main>
      <PRJTCanvas />
      <div className={styles.titleOverlay}>SERIAL_000 : PROTOTYPE</div>
    </main>
  );
}

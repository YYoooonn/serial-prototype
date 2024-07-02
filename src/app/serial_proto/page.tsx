"use client";

import { PRJTCanvas } from "@/components/Canvas";
import * as styles from "@/styles/overlay.css";

export default function SerialProto() {
  return (
    <main>
      <PRJTCanvas />
      <div className={styles.textoverlay}>SERIAL_PROTO</div>
    </main>
  );
}

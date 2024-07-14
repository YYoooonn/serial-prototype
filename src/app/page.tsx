import { arrayLinks } from "@/constants/constant";
import * as styles from "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.title}>PRJT_SERIAL</div>
      <div className={styles.landingTable}>
        <div className={styles.tableRow}>
          {/* column_0 */}
          <div className={styles.tableCell}>
            <Link className={styles.linkActivated} href={"/serial_proto"}>
              SERIAL_000 : PROTOTYPE
            </Link>
            <Link className={styles.linkActivated} href={"/serial_proto"}>
              SERIAL_001 : THREE BODY CONDITION
            </Link>
            {/* deactivated */}
            {arrayLinks.map((i) => (
              <Link className={styles.linkDeactivated} href={`/serial_${i}`}>
                SERIAL_{i}
              </Link>
            ))}
          </div>
          {/* column_1 */}
          <div className={styles.tableCell}>
            <Link className={styles.testlinkActivated} href={"/landing_000"}>
              LANDING_000 : MATRIX
            </Link>
          </div>
          {/* column_2 */}
          <div className={styles.tableCell}>
            <Link className={styles.testlinkActivated} href={"/test"}>
              notion test
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

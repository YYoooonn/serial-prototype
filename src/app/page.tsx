import { arrayLinks } from "@/constants/constant";
import * as styles from "./home.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.title}>PRJT_SERIAL</div>
      <ul>
        {/* activated */}
        <li key={0}>
          <Link className={styles.linkActivated} href={"/serial_proto"}>
            SERIAL_000 : PROTOTYPE
          </Link>
          <Link className={styles.linkActivated} href={"/serial_proto"}>
            SERIAL_001 : THREE BODY CONDITION
          </Link>
        </li>

        {/* deactivated */}
        {arrayLinks.map((i) => (
          <li key={i}>
            <Link className={styles.linkDeactivated} href={`/serial_${i}`}>
              SERIAL_{i}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

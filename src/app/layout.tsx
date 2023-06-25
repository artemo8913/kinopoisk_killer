import "./styles/resetStyles.css";
import "./styles/global.css";
import styles from "./styles/app.module.css";
import { Roboto } from "next/font/google";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic", "latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

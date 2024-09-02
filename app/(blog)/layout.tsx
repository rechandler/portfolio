import "@css/custom.css";
import "@css/dark.css";
import "@css/main.css";
import "@css/modalboxes.css";
import "@css/plugins.css";
import { Mulish, Poppins } from "next/font/google";
import "../globals.css";
import State from "@/context/context";
import { draftMode } from "next/headers";
import AlertBanner from "./alert-banner";
import { VisualEditing } from "next-sanity";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

/** google fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

/** Font family */
const fontFamily = `${mulish.variable} ${poppins.variable} dark`;

export const metadata = {
  title: "Ryann Chandler | E3",
  description: "Personal Website for Ryann Chandler",
};

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={fontFamily}>
        {draftMode().isEnabled && <AlertBanner />}
        {/* <Preloader /> */}
        <State>{children}</State>
        <Analytics />
        <SpeedInsights />
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

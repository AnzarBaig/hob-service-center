import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

<link rel="icon" href="/favicon.ico" sizes="any" />;

export const metadata = {
  title: "Hob Servic Center",
  description:
    "India Gas Stove Services Provides One Of The Best Gas Stove Repair & Services | Hob Repair & Services | Gas Stove Burner Repair & Services | Gas Stove Repair & Services Door Service | Cooking Range Repair & Services | Cooking Gas Stove Burner Repair & Services | Three Burner Gas Stove Repair & Services | Two Burner Gas Stove Repair & Services in Saraipalya, Bangalore, India | ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

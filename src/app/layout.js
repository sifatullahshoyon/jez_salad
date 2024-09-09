import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "JEZ  SALAD",
  description: "food services related website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="min-h-screen">
        {children}
        </div>
        <footer></footer>
        </body>
    </html>
  );
}

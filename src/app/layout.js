import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Homepage/Header";
import Footer from "@/components/Shared/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umesh Dixit portfolio",
  description: "portfolio",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={`${inter.className} bg-slate-950`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]" />
        <div className="container mx-auto min-h-screen">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shered/Navbar";
import Footer from "@/components/shered/Footer";
import AuthProvider from "@/lib/services/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
 },
  description: "car services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <AuthProvider> 
        <Navbar/>
     <div className="max-w-7xl mx-auto">
     {children}
     </div>
        <Footer/>
    </AuthProvider>  
      </body>
    </html>
  );
}

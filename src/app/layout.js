import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNavbar from "./Navbar";
import TopBar from "./TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VVR RoadLines and Logistics",
  description: "VVR RoadLines and Logistics is a customer-focused freight and transportation company delivering reliable road-haul solutions across India. Leveraging a modern fleet and real-time tracking, we ensure your cargo moves safely and on schedule—whether it’s palletized goods, temperature-controlled shipments, or oversized loads. Our end-to-end services include route optimization, warehousing partnerships, and dedicated support, so you get full visibility and peace of mind from pickup through delivery. With competitive rates and a commitment to sustainability, VVR RoadLines keeps your supply chain moving forward.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* 20% Sidebar */}
          <div className="w-1/6 bg-gray-900 text-white">
            <SideNavbar />
          </div>

          {/* 80% Main Content */}
          <main className="w-5/6 p-6 bg-gray-100">
          <TopBar/>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


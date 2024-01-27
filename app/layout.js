import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import ReduxToolkitProvider from "@/providers/ReduxToolkitProvider";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Assessment",
  description: "Created by Javed Hussain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ReduxToolkitProvider>
            <Header />
            {children}
          </ReduxToolkitProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}

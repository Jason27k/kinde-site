import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import NavComponent from "@/components/Navbar/NavComponent";
import NavComponentSignedIn from "@/components/Navbar/NavComponentsSignedIn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const overpass = Overpass({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ani Sekai",
  description: "Ani Sekai - Anime and Manga Community",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          overpass.className
        )}
      >
        {signedIn ? <NavComponentSignedIn /> : <NavComponent />}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

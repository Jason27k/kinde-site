"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import MidSectionSignedIn from "@/components/Navbar/MidSectionSignedIn";
import EndSectionSignedIn from "@/components/Navbar/EndSectionSignedIn";
import MobileMenuSignedIn from "@/components/Navbar/MobileMenuSignedIn";
import Link from "next/link";
import Image from "next/image";

const NavComponentSignedIn = () => {
  const { user } = useKindeBrowserClient();
  console.log(user);
  return (
    <div>
      <div className="w-screen">
        <div className="flex items-center justify-between md:justify-evenly px-4 py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Ani Sekai" width={40} height={40} />
            <h1 className="text-2xl font-bold hidden lg:block">Ani Sekai</h1>
          </Link>
          <div className="hidden md:flex justify-center z-50">
            <MidSectionSignedIn />
          </div>
          <div className="hidden md:flex justify-center z-50">
            <EndSectionSignedIn />
          </div>
          <div className="block md:hidden z-50">
            <MobileMenuSignedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponentSignedIn;

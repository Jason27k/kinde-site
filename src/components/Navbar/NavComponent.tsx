"use client";

import Image from "next/image";
import Link from "next/link";
import MidSection from "./MidSection";
import EndSection from "./EndSection";
import MobileMenu from "./MobileMenu";

const NavComponent = () => {
  return (
    <div className="w-screen">
      <div className="flex items-center justify-between md:justify-evenly px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Ani Sekai" width={40} height={40} />
          <h1 className="text-2xl font-bold hidden lg:block">Ani Sekai</h1>
        </Link>
        <div className="hidden md:flex justify-center">
          <MidSection />
        </div>
        <div className="hidden md:flex justify-center">
          <EndSection />
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default NavComponent;

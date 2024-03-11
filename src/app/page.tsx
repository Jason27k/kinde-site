"use server";

import EndSection from "@/components/Navbar/EndSection";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (signedIn) {
    redirect("/home");
  }
  return <div className="flex flex-col bg-">Not Logged In</div>;
}

"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { GenreCollection } from "@/lib/constants";
import Combox from "@/components/Search/Combox";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (signedIn) {
    redirect("/home");
  }
  return (
    <div className="flex flex-col">
      <Combox data={GenreCollection} />
    </div>
  );
}

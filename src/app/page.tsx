"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchFilters from "@/components/Search/SearchFilters";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (signedIn) {
    redirect("/home");
  }
  return (
    <div className="flex">
      <SearchFilters currentCategory="Anime" />
    </div>
  );
}

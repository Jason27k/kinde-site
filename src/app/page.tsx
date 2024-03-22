"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchAnime from "@/components/Search/SearchAnime";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (signedIn) {
    redirect("/home");
  }
  return <SearchAnime />;
}

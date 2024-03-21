"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import SearchFilters from "@/components/Search/SearchFilters";
import {
  AllTime,
  NextSeason,
  PopularSeasonal,
  Top100,
  TrendingAnimeFunction,
} from "./actions";
import SearchResults from "@/components/Search/SearchResults";
import SearchRow from "@/components/Search/SearchRow";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const signedIn = await isAuthenticated();
  if (signedIn) {
    redirect("/home");
  }
  const trendingData = await TrendingAnimeFunction();
  const popularSeasonal = await PopularSeasonal();
  const nextSeason = await NextSeason();
  const allTime = await AllTime();
  const top100 = await Top100();
  if (!trendingData || !popularSeasonal || !nextSeason || !allTime || !top100) {
    return <div>loading...</div>;
  }
  const mediaData = [
    trendingData.data.Page.media,
    popularSeasonal.data.Page.media,
    nextSeason.data.Page.media,
    allTime.data.Page.media,
    top100.data.Page.media,
  ];

  return (
    <div className="flex">
      {mediaData && <SearchFilters data={mediaData} currentCategory="Anime" />}
    </div>
  );
}

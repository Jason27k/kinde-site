"use server";

import SearchFilters from "@/components/Search/SearchFilters";
import {
  AllTime,
  NextSeason,
  PopularSeasonal,
  Top100,
  TrendingAnimeFunction,
} from "@/app/actions";

const SearchAnime = async () => {
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
};

export default SearchAnime;

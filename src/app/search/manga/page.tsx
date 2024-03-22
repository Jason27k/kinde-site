"use server";

import SearchFilters from "@/components/Search/SearchFilters";
import {
  AllTimeManga,
  PopularManhwa,
  Top100Manga,
  TrendingMangaFunction,
} from "@/app/actions";

const page = async () => {
  const trendingData = await TrendingMangaFunction();
  const allTime = await AllTimeManga();
  const popularManhwa = await PopularManhwa();
  const top100 = await Top100Manga();
  if (!trendingData || !allTime || !popularManhwa || !top100) {
    return <div>loading...</div>;
  }
  const mediaData = [
    trendingData.data.Page.media,
    allTime.data.Page.media,
    popularManhwa.data.Page.media,
    top100.data.Page.media,
  ];

  return (
    <div className="flex">
      {mediaData && <SearchFilters data={mediaData} currentCategory="Manga" />}
    </div>
  );
};

export default page;

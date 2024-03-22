"use client";
import MangaSearchCard from "./MangaSearchCard";
import SearchCard from "./SearchCard";
import { Anime, Manga } from "@/app/actions";

interface SearchRowProps {
  data: Anime[] | Manga[];
  ranked?: boolean;
  page: "anime" | "manga";
}

const SearchRow = ({ data, ranked, page }: SearchRowProps) => {
  if (data.length != 6) {
    if (page === "anime") {
      return (
        <div className="w-full">
          <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {data.map((item, index) => {
              return (
                <SearchCard
                  key={index}
                  {...(item as Anime)}
                  ranked={ranked}
                  className="max-w-[180px] max-h-[265px]"
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full">
          <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {data.map((item, index) => {
              return (
                <MangaSearchCard
                  key={index}
                  {...(item as Manga)}
                  ranked={ranked}
                  className="max-w-[180px] max-h-[265px]"
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {page === "anime" ? (
          <>
            <SearchCard {...(data[0] as Anime)} ranked={ranked} />
            <SearchCard {...(data[1] as Anime)} ranked={ranked} />
            <SearchCard {...(data[2] as Anime)} ranked={ranked} />
            <SearchCard
              {...(data[3] as Anime)}
              ranked={ranked}
              className="flex"
            />
            <SearchCard
              {...(data[4] as Anime)}
              ranked={ranked}
              className="flex sm:hidden md:flex"
            />
            <SearchCard
              {...(data[5] as Anime)}
              ranked={ranked}
              className="flex sm:hidden"
            />
          </>
        ) : (
          <>
            <MangaSearchCard {...(data[0] as Manga)} ranked={ranked} />
            <MangaSearchCard {...(data[1] as Manga)} ranked={ranked} />
            <MangaSearchCard {...(data[2] as Manga)} ranked={ranked} />
            <MangaSearchCard
              {...(data[3] as Manga)}
              ranked={ranked}
              className="flex"
            />
            <MangaSearchCard
              {...(data[4] as Manga)}
              ranked={ranked}
              className="flex sm:hidden md:flex"
            />
            <MangaSearchCard
              {...(data[5] as Manga)}
              ranked={ranked}
              className="flex sm:hidden"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchRow;

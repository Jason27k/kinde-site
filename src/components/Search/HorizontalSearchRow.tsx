import HorizontalCard from "./HorizontalCard";
import { Anime, Manga } from "@/app/actions";
import MangaHorizontalCard from "./MangaHorizontalCard";

interface SearchRowProps {
  data: Anime[] | Manga[];
  ranked?: boolean;
  page: "anime" | "manga";
}

const HorizontalSearchRow = ({ data, ranked, page }: SearchRowProps) => {
  return (
    <>
      {page === "anime" ? (
        <>
          {data.map((item, index) => (
            <HorizontalCard key={index} {...(item as Anime)} ranked={ranked} />
          ))}
        </>
      ) : (
        <>
          {data.map((item, index) => (
            <MangaHorizontalCard
              key={index}
              {...(item as Manga)}
              ranked={ranked}
            />
          ))}
        </>
      )}
    </>
  );
};

export default HorizontalSearchRow;

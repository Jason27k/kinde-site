import ComboWithClasses from "./ComboWithClasses";
import { collections } from "@/lib/constants";

interface Props {
  page: string;
}

const SearchInputs = ({ page }: Props) => {
  const format =
    page === "anime" ? collections.AnimeFormat : collections.MangaFormat;
  const status =
    page === "anime" ? collections.AnimeStatus : collections.MangaStatus;
  const service =
    page === "anime" ? collections.StreamingServices : collections.ReadableOn;
  let filters = [];
  if (page === "anime") {
    filters = [
      collections.Genre,
      collections.Year,
      collections.Season,
      format,
      status,
      service,
      collections.Countries,
      collections.SourceMaterial,
    ];
  } else {
    filters = [
      collections.Genre,
      collections.Year,
      format,
      status,
      service,
      collections.Countries,
      collections.SourceMaterial,
    ];
  }

  return (
    <div className="w-screen whitespace-nowrap overflow-x-scroll no-scrollbar snap-x">
      <div className="flex gap-8 w-max">
        {filters.map((filter) => (
          <div key={filter.title}>
            <ComboWithClasses data={filter.collection} label={filter.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInputs;

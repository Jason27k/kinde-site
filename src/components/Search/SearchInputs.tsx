import ComboWithClasses from "./ComboWithClasses";
import { collections } from "@/lib/constants";

interface Props {
  page: string;
  setStates: any;
}

const SearchInputs = ({ page, setStates }: Props) => {
  const format =
    page === "anime" ? collections.AnimeFormat : collections.MangaFormat;
  const status =
    page === "anime" ? collections.AnimeStatus : collections.MangaStatus;
  const service =
    page === "anime" ? collections.StreamingServices : collections.ReadableOn;
  const filters = [
    { name: "genre", data: collections.Genre },
    { name: "year", data: collections.Year },
    { name: "season", data: collections.Season },
    { name: "format", data: format },
    { name: "sort", data: collections.Sort },
    { name: "status", data: status },
    { name: "service", data: service },
    { name: "country", data: collections.Countries },
    { name: "source", data: collections.SourceMaterial },
  ];
  return (
    <div className="w-screen whitespace-nowrap overflow-x-scroll no-scrollbar snap-x">
      <div className="flex gap-8 w-max">
        {filters.map((filter) => (
          <div key={filter.name}>
            <ComboWithClasses
              data={filter.data.collection}
              label={filter.data.title}
              setState={setStates[filter.name]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInputs;

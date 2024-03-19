import ComboWithClasses from "./ComboWithClasses";
import { collections } from "@/lib/constants";

interface Props {
  page: string;
  className?: string;
}

const SearchInputsRow = ({ page, className }: Props) => {
  const format =
    page === "anime" ? collections.AnimeFormat : collections.MangaFormat;
  const mainFilters = [
    { name: "genre", data: collections.Genre },
    { name: "year", data: collections.Year },
    { name: "season", data: collections.Season },
    { name: "format", data: format },
  ];
  return (
    <>
      {mainFilters.map((filter) => (
        <div key={filter.name}>
          <ComboWithClasses
            data={filter.data.collection}
            label={filter.data.title}
            className={className}
          />
        </div>
      ))}
    </>
  );
};

export default SearchInputsRow;

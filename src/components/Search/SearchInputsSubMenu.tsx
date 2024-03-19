import ComboWithClasses from "./ComboWithClasses";
import { collections } from "@/lib/constants";

interface Props {
  page: string;
  className?: string;
}

const SearchInputsSubRow = ({ page, className }: Props) => {
  const status =
    page === "anime" ? collections.AnimeStatus : collections.MangaStatus;
  const service =
    page === "anime" ? collections.StreamingServices : collections.ReadableOn;
  const subFilters = [
    { name: "status", data: status },
    { name: "service", data: service },
    { name: "country", data: collections.Countries },
    { name: "source", data: collections.SourceMaterial },
  ];
  return (
    <>
      {subFilters.map((filter) => (
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

export default SearchInputsSubRow;

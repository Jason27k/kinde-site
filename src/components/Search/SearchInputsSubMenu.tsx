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
    status,
    service,
    collections.Countries,
    collections.SourceMaterial,
  ];
  return (
    <>
      {subFilters.map((filter) => (
        <div key={filter.title}>
          <ComboWithClasses
            data={filter.collection}
            label={filter.title}
            className={className}
          />
        </div>
      ))}
    </>
  );
};

export default SearchInputsSubRow;

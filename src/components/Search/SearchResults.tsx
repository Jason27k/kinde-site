import Link from "next/link";
import SearchRow from "./SearchRow";
import { CardProps } from "./SearchCard";

interface Props {
  title: string;
  page: string;
  data: CardProps[];
}

const SearchResults = ({ title, page, data }: Props) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl">{title}</h1>
        <Link href={page}>View All</Link>
      </div>
      <SearchRow data={data} />
    </div>
  );
};

export default SearchResults;

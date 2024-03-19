import SearchCard from "./SearchCard";
import { CardProps } from "./SearchCard";

interface SearchRowProps {
  data: CardProps[];
}

const SearchRow = ({ data }: SearchRowProps) => {
  if (data.length != 6) {
    return (
      <div className="flex flex-row gap-2">
        {data.map((item, index) => {
          return <SearchCard key={index} {...item} />;
        })}
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:hidden place-items-center gap-2 ">
        <SearchCard {...data[0]} />
        <SearchCard {...data[1]} />
        <SearchCard {...data[2]} />
        <SearchCard {...data[3]} />
        <SearchCard {...data[4]} />
        <SearchCard {...data[5]} />
      </div>
      <div className="hidden sm:flex md:hidden justify-start place-items-center gap-2 ">
        <SearchCard {...data[0]} />
        <SearchCard {...data[1]} />
        <SearchCard {...data[2]} />
        <SearchCard {...data[3]} />
      </div>
      <div className="hidden md:flex justify-start place-items-center gap-2 ">
        <SearchCard {...data[0]} />
        <SearchCard {...data[1]} />
        <SearchCard {...data[2]} />
        <SearchCard {...data[3]} />
        <SearchCard {...data[4]} />
      </div>
    </div>
  );
};

export default SearchRow;

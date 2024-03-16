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
      <div className="flex flex-wrap justify-evenly sm:justify-between ">
        <SearchCard {...data[0]} />
        <SearchCard {...data[1]} />
        <SearchCard {...data[2]} />
        <SearchCard
          {...data[3]}
          className="block md:hidden lg:block xl:block"
        />
        <SearchCard {...data[4]} className="block md:hidden xl:block" />
        <SearchCard {...data[5]} className="block md:hidden" />
      </div>
    </div>
  );
};

export default SearchRow;

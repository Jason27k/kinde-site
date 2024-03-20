import SearchCard from "./SearchCard";
import { CardProps } from "./SearchCard";

interface SearchRowProps {
  data: CardProps[];
  ranked?: boolean;
}

const SearchRow = ({ data, ranked }: SearchRowProps) => {
  if (data.length != 6) {
    return (
      <div className="w-full">
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {data.map((item, index) => {
            return (
              <SearchCard
                key={index}
                {...item}
                ranked={ranked}
                className="max-w-[180px] max-h-[265px] w"
              />
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:hidden place-items-center gap-3 ">
        <SearchCard {...data[0]} ranked={ranked} />
        <SearchCard {...data[1]} ranked={ranked} />
        <SearchCard {...data[2]} ranked={ranked} />
        <SearchCard {...data[3]} ranked={ranked} />
        <SearchCard {...data[4]} ranked={ranked} />
        <SearchCard {...data[5]} ranked={ranked} />
      </div>
      <div className="hidden sm:flex md:hidden justify-start place-items-center gap-3 ">
        <SearchCard {...data[0]} ranked={ranked} />
        <SearchCard {...data[1]} ranked={ranked} />
        <SearchCard {...data[2]} ranked={ranked} />
        <SearchCard {...data[3]} ranked={ranked} />
      </div>
      <div className="hidden md:flex justify-start place-items-center gap-3 ">
        <SearchCard {...data[0]} ranked={ranked} />
        <SearchCard {...data[1]} ranked={ranked} />
        <SearchCard {...data[2]} ranked={ranked} />
        <SearchCard {...data[3]} ranked={ranked} />
        <SearchCard {...data[4]} ranked={ranked} />
      </div>
    </div>
  );
};

export default SearchRow;

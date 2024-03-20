import HorizontalCard from "./HorizontalCard";
import SearchCard from "./SearchCard";
import { CardProps } from "./SearchCard";

interface SearchRowProps {
  data: CardProps[];
  ranked?: boolean;
  page: string;
}

const HorizontalSearchRow = ({ data, ranked, page }: SearchRowProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <HorizontalCard
            key={index}
            {...item}
            ranked={ranked}
            userCount="37260 users"
            duration="1 hr 51 min"
            start="Winter 2021"
            page={page}
          />
        );
      })}
    </>
  );
};

export default HorizontalSearchRow;

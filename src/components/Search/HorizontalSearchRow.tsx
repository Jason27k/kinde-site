import HorizontalCard from "./HorizontalCard";
import SearchCard from "./SearchCard";
import { CardProps } from "./SearchCard";

interface SearchRowProps {
  data: CardProps[];
  ranked?: boolean;
}

const HorizontalSearchRow = ({ data, ranked }: SearchRowProps) => {
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
          />
        );
      })}
    </>
  );
};

export default HorizontalSearchRow;

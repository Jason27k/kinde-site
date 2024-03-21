import HorizontalCard from "./HorizontalCard";
import { Anime } from "@/app/actions";

interface SearchRowProps {
  data: Anime[];
  ranked?: boolean;
  page: string;
}

const HorizontalSearchRow = ({ data, ranked, page }: SearchRowProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <HorizontalCard key={index} {...item} ranked={ranked} page={page} />
        );
      })}
    </>
  );
};

export default HorizontalSearchRow;

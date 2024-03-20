import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Smile, Hash } from "lucide-react";

interface Props {
  image: string;
  alt: string;
  title: string;
  genres: string[];
  percentage: string;
  userCount: string;
  type: string;
  duration: string;
  start: string;
  nextEpisode: string;
  ranked?: boolean;
  rank?: number;
}

const HorizontalCard = ({
  image,
  alt,
  title,
  genres,
  percentage,
  userCount,
  type,
  duration,
  start,
  nextEpisode,
  ranked,
  rank,
}: Props) => {
  return (
    <div className="hidden lg:flex w-full h-[80px] gap-2">
      <div className="flex items-center w-[50px] h-50px] justify-center">
        {ranked && (
          <>
            <Hash size={12} />
            <h3 className="text-2xl">{rank}</h3>
          </>
        )}
      </div>
      <div className="h-full flex-1">
        <Card>
          <CardBody>
            <div className="flex items-center justify-start gap-3">
              <Image src={image} alt={alt} width={48} height={60} />
              <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h3>{title}</h3>
                  <div className="flex gap-2">
                    {genres.map((genre) => (
                      <div className="bg-[#ef5d5d] rounded-lg px-3" key={genre}>
                        {genre}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start w-full">
                  <div className="flex w-[130px] items-center gap-1">
                    <Smile size={22} />
                    <div className="flex flex-col text-sm justify-center">
                      <p>{percentage}</p>
                      <p className="text-[12px]">{userCount}</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-[130px] text-sm justify-center">
                    <p>{type}</p>
                    <p className="text-[12px]">{duration} </p>
                  </div>
                  <div className="flex flex-col w-[130px] text-sm justify-center">
                    <p>{start}</p>
                    <p className="text-[12px]">{nextEpisode} </p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HorizontalCard;

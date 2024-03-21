import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Smile, Hash } from "lucide-react";
import Link from "next/link";
import { Anime } from "@/app/actions";

interface Props {
  ranked?: boolean;
  page: string;
}

const HorizontalCard = ({
  coverImage,
  title,
  genres,
  averageScore,
  popularity,
  format,
  duration,
  startDate,
  nextAiringEpisode,
  ranked,
  rankings,
  page,
  season,
}: Props & Anime) => {
  return (
    <div className="hidden lg:flex w-full h-[80px] gap-2">
      <div className="flex items-center w-[50px] h-50px] justify-center font-bold">
        {ranked && (
          <>
            <Hash size={12} />
            <h3 className="text-2xl">{rankings[0].rank}</h3>
          </>
        )}
      </div>
      <div className="h-full flex-1">
        <Card>
          <CardBody>
            <div className="flex items-center justify-start gap-3">
              <Image
                src={coverImage.extraLarge}
                alt={
                  title.english !== undefined && title.english !== null
                    ? title.english
                    : title.romaji
                }
                width={48}
                height={60}
              />
              <div className="grid grid-cols-2 w-full gap-4">
                <div className="flex flex-col justify-center items-start gap-1">
                  <h3>
                    {title.english !== undefined && title.english !== null
                      ? title.english
                      : title.romaji}
                  </h3>
                  <div className="flex gap-2 max-h-[24px] overflow-hidden">
                    {genres.slice(0, 4).map((genre) => (
                      <div
                        className="bg-[#ef5d5d] rounded-lg px-3 py-[2px]"
                        key={genre}
                      >
                        <Link href={`/search/${page}?genre=${genre}`}>
                          <p className="text-[12px]">{genre.toLowerCase()}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-start w-full">
                  <div className="flex w-[130px] items-center gap-1">
                    <Smile size={22} />
                    <div className="flex flex-col text-sm justify-center">
                      <p>{averageScore}</p>
                      <p className="text-[12px]">{popularity}</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-[130px] text-sm justify-center">
                    <p>{format}</p>
                    <p className="text-[12px]">{duration} </p>
                  </div>
                  <div className="flex flex-col w-[130px] text-sm justify-center">
                    <p>{season + " " + startDate.year}</p>
                    <p className="text-[12px]">
                      {nextAiringEpisode !== null
                        ? nextAiringEpisode.airingAt
                        : "Finished Airing"}{" "}
                    </p>
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

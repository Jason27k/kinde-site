"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Hash, Smile } from "lucide-react";
import { Anime } from "@/app/actions";

export interface CardProps {
  className?: string;
  ranked?: boolean;
}

const SearchCard = ({
  className,
  ranked,
  title,
  coverImage,
  rankings,
  nextAiringEpisode,
  averageScore,
  studios,
  format,
  genres,
}: CardProps & Anime) => {
  console.log(
    title.english !== undefined && title.english !== null ? "" : title.romaji
  );
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, backgroundColor: "gray" }}
      animate={{
        scale: 1,
        opacity: 1,
        backgroundColor: "transparent",
        transition: { duration: 0.2 },
      }}
      className="w-full h-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.15 },
        }}
        className={cn(
          "rounded-none shadow-none w-full h-full flex flex-col",
          className
        )}
      >
        <div className="relative h-full w-full ">
          {ranked && (
            <div className="absolute -left-2 -top-2 rounded-full bg-red-500 p-2 flex items-center">
              <Hash size={12} />
              {rankings[0].rank}
            </div>
          )}
          <div className="hidden md:block w-full h-full">
            <HoverCard>
              <HoverCardTrigger asChild className="h-full w-full">
                <Image
                  src={coverImage.extraLarge}
                  alt={
                    title.english !== undefined && title.english !== null
                      ? title.english
                      : title.romaji
                  }
                  width={185}
                  height={265}
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col items-start justify-center gap-3 text-sm">
                  <div className="flex justify-between w-full gap-3">
                    <p className="text-wrap w-full">
                      {nextAiringEpisode !== null
                        ? `${nextAiringEpisode.episode} 
                    airing at ${nextAiringEpisode.airingAt} at ${nextAiringEpisode.timeUntilAiring}`
                        : "Finished Airing"}
                    </p>
                    <div className="flex-1 w-full flex items-center gap-2">
                      <Smile />
                      <div className="">{averageScore}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="">{studios.edges[0].node.name}</div>
                    <div className="">{format}</div>
                  </div>
                  <div className="flex">
                    {genres.slice(0, 3).map((genre) => (
                      <div
                        className="rounded-2xl bg-orange-200 px-4"
                        key={genre}
                      >
                        {genre}
                      </div>
                    ))}
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="block md:hidden h-full w-full">
            <Image
              src={coverImage.extraLarge}
              alt={
                title.english !== undefined && title.english !== null
                  ? title.english
                  : title.romaji
              }
              width={185}
              height={265}
              className="h-full w-full"
            />
          </div>
        </div>
        <h1 className="text-[12px] overflow-hidden line-clamp-2 mt-1 h-[42px]">
          {title.english !== undefined && title.english !== null
            ? title.english
            : title.romaji}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default SearchCard;

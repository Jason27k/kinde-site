import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Hash, Smile } from "lucide-react";

export interface CardProps {
  className?: string;
  image: string;
  alt: string;
  title: string;
  ranked?: boolean;
  rank?: number;
  nextEpisode: string;
  percentage: string;
  studio: string;
  type: string;
  genres: string[];
}

const SearchCard = ({
  className,
  image,
  alt,
  title,
  ranked,
  rank,
  nextEpisode,
  percentage,
  studio,
  type,
  genres,
}: CardProps) => {
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
              {rank}
            </div>
          )}
          <div className="hidden md:block w-full h-full">
            <HoverCard>
              <HoverCardTrigger asChild className="h-full w-full">
                <Image src={image} alt={alt} width={185} height={265} />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col items-start justify-center gap-3 text-sm">
                  <div className="flex justify-between w-full gap-3">
                    <p className="text-wrap w-full">{nextEpisode}</p>
                    <div className="flex-1 w-full flex items-center gap-2">
                      <Smile />
                      <div className="">{percentage}</div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="">{studio}</div>
                    <div className="">{type}</div>
                  </div>
                  <div className="flex">
                    {genres.map((genre) => (
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
          <div className="block md:hidden">
            <Image src={image} alt={alt} width={185} height={265} />
          </div>
        </div>
        <h1 className="text-sm overflow-hidden line-clamp-2 mt-1">{title}</h1>
      </motion.div>
    </motion.div>
  );
};

export default SearchCard;

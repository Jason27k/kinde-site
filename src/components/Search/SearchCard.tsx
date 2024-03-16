import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface CardProps {
  className?: string;
  image: string;
  alt: string;
  title: string;
}

const SearchCard = ({ className, image, alt, title }: CardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, backgroundColor: "gray" }}
      animate={{
        scale: 1,
        opacity: 1,
        backgroundColor: "transparent",
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.15 },
        }}
        className={cn(
          "rounded-none shadow-none max-h-[317px] max-w-[185px]",
          className
        )}
      >
        <div className="relative h-full w-full">
          <Image src={image} alt={alt} height={265} width={185} />
        </div>
        <h1 className="text-sm overflow-hidden line-clamp-2 mt-1">{title}</h1>
      </motion.div>
    </motion.div>
  );
};

export default SearchCard;

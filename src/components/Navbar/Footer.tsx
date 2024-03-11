import { SquareUser, Star, ThumbsUp, User } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid grid-cols-[.5fr_1fr] gap-x-4 gap-y-2 text-[12px]">
      <Link
        href="/search/staff"
        className="group text-muted-foreground hover:text-gray-800  flex items-center gap-2"
      >
        <User
          size={12}
          className="fill-muted-foreground group-hover:fill-gray-800"
        />
        <p>Staff</p>
      </Link>
      <Link
        href="/search/characters"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <SquareUser size={12} />
        <p>Characters</p>
      </Link>
      <Link
        href="/reviews"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <Star
          size={12}
          className="fill-muted-foreground group-hover:fill-gray-800"
        />
        <p>Reviews</p>
      </Link>
      <Link
        href="/recommendations"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <ThumbsUp
          size={12}
          className="fill-muted-foreground group-hover:fill-gray-800"
        />
        <p>Recommendations</p>
      </Link>
    </div>
  );
};

export default Footer;

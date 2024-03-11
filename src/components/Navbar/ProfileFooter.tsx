import {
  Heart,
  Instagram,
  LogOut,
  Smartphone,
  SquareUser,
  Star,
  ThumbsUp,
  User,
} from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const ProfileFooter = () => {
  return (
    <div className="grid grid-cols-[.5fr_1fr] gap-x-4 gap-y-2 text-[12px]">
      <Link
        href="/donate"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <Heart size={12} className="" />
        <p>Donate</p>
      </Link>
      <Link
        href="/apps"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <Smartphone size={12} />
        <p>Apps</p>
      </Link>
      <Link
        href="/instagram"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <Instagram size={12} className="" />
        <p>Instagram</p>
      </Link>

      <LogoutLink
        postLogoutRedirectURL="/"
        className="group text-muted-foreground hover:text-gray-800 flex items-center gap-2"
      >
        <LogOut size={12} className="" />
        <p>Logout</p>
      </LogoutLink>
    </div>
  );
};

export default ProfileFooter;

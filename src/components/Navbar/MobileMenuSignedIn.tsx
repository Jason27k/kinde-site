import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Menu,
  MessagesSquare,
  Search,
  Play,
  BookOpen,
  User,
  Mail,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const MobileMenuSignedIn = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={40} className="fill-muted-foreground" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-10 items-start justify-center gap-4 px-4">
          <Link
            href="/user/animelist"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <Play size={24} />
            <h1 className="text-lg">Anime List</h1>
          </Link>
          <Link
            href="/user/mangalist"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <BookOpen size={24} />
            <h1 className="text-lg">Manga List</h1>
          </Link>
          <Link
            href="/forum"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <MessagesSquare size={24} />
            <h1 className="text-lg">Forum</h1>
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <User size={24} />
            <h1 className="text-lg">Profile</h1>
          </Link>
          <Link
            href="/notifications"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <Mail size={24} />
            <h1 className="text-lg">Notifications</h1>
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <SlidersHorizontal size={24} />
            <h1 className="text-lg">Settings</h1>
          </Link>
          <Link
            href="/search"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <Search size={24} />
            <h1 className="text-lg">Search</h1>
          </Link>
          <LogoutLink
            postLogoutRedirectURL="/"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <LogOut size={24} />
            <p className="text-lg">Logout</p>
          </LogoutLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSignedIn;

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  LogIn,
  Menu,
  MessagesSquare,
  Search,
  UserPlus,
  Users,
} from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={40} className="fill-muted-foreground" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-10 items-start justify-center gap-4 px-4">
          <Link
            href="/search"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <Search size={24} />
            <h1 className="text-lg">Search</h1>
          </Link>
          <Link
            href="/social"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <Users size={24} />
            <h1 className="text-lg">Social</h1>
          </Link>
          <Link
            href="/forum"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <MessagesSquare size={24} />
            <h1 className="text-lg">Forum</h1>
          </Link>
          <RegisterLink className="flex items-center gap-4 group text-muted-foreground hover:text-black">
            <UserPlus size={24} />
            <h1 className="text-lg">Sign Up</h1>
          </RegisterLink>
          <LoginLink
            postLoginRedirectURL="/home"
            className="flex items-center gap-4 group text-muted-foreground hover:text-black"
          >
            <LogIn size={24} />
            <h1 className="text-lg">Login</h1>
          </LoginLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

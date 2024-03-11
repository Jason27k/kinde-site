import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import DropSection from "./DropSection";
import { BookOpen, Play } from "lucide-react";
import Footer from "@/components/Navbar/Footer";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const links = [
  {
    href: "home",
    label: "Home",
  },
  {
    href: "user/animelist",
    label: "Anime List",
  },
  {
    href: "user/mangalist",
    label: "Manga List",
  },
  {
    href: "forum",
    label: "Forum",
  },
];

const subLinks = [
  {
    href: "top-100",
    label: "Top 100",
  },
  {
    href: "trending",
    label: "Trending",
  },
  {
    href: "top-movies",
    label: "Top Movies",
  },
];
const MidSectionSignedIn = () => {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 justify-evenly">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Browse</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-2 w-[270px] flex flex-col h-[200px]">
                <div className="mt-2 h-1/3 px-5 pt-4">
                  <DropSection
                    baseUrl="/search/anime"
                    title="Anime"
                    links={subLinks}
                  >
                    <Play
                      size={24}
                      className="fill-muted-foreground group-hover:fill-gray-800"
                    />
                  </DropSection>
                </div>
                <div className="h-1/3 px-5 py-2">
                  <DropSection
                    baseUrl="/search/manga"
                    title="Manga"
                    links={subLinks}
                  >
                    <BookOpen
                      size={24}
                      className="fill-muted-foreground group-hover:fill-gray-800"
                    />
                  </DropSection>
                </div>
                <div className="h-1/3 px-1 py-2 bg-gray-200 flex justify-center">
                  <Footer />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {links.map(({ href, label }) => (
            <div key={label}>
              <NavigationMenuItem>
                <Link
                  href={`/${href}`}
                  className={buttonVariants({
                    variant: "ghost",
                  })}
                >
                  {label}
                </Link>
              </NavigationMenuItem>
            </div>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MidSectionSignedIn;

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DropSection from "./DropSection";
import { BookOpen, Play } from "lucide-react";
import Footer from "@/components/Navbar/Footer";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const Links = [
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
const MidSection = () => {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 justify-evenly">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Search</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-2 w-[270px] flex flex-col h-[200px]">
                <div className="mt-2 h-1/3 px-5 pt-4">
                  <DropSection
                    baseUrl="/search/anime"
                    title="Anime"
                    links={Links}
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
                    links={Links}
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
          <NavigationMenuItem>
            <Link
              href="/social"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Social
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/forum"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Forum
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MidSection;

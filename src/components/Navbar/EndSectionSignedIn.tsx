import { Mail, SlidersHorizontal, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import Image from "next/image";
import ProfileDropSection from "./ProfileDropSection";
import ProfileFooter from "./ProfileFooter";
import SearchComponent from "./SearchComponent";

const EndSectionSignedIn = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-3 justify-evenly">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Image
                src="/avatar/default.png"
                alt="Profile Picture"
                width={40}
                height={40}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="gap-2 w-[180px] flex flex-col lg:h-[200px]">
                <div className="mt-2 h-1/5 px-5">
                  <ProfileDropSection baseUrl="/profile" title="Profile">
                    <User
                      size={24}
                      className="fill-muted-foreground group-hover:fill-gray-800"
                    />
                  </ProfileDropSection>
                </div>
                <div className="mt-2 h-1/5 px-5">
                  <ProfileDropSection
                    baseUrl="/notification"
                    title="Notification"
                  >
                    <Mail
                      size={24}
                      className="text-white fill-muted-foreground group-hover:fill-gray-800"
                    />
                  </ProfileDropSection>
                </div>
                <div className="mt-2 h-1/5 px-5">
                  <ProfileDropSection baseUrl="/settings" title="Settings">
                    <SlidersHorizontal
                      size={24}
                      className="fill-muted-foreground group-hover:fill-gray-800"
                    />
                  </ProfileDropSection>
                </div>
                <div className="h-2/5 bg-gray-200 flex px-4 lg:px-1 py-2 justify-center">
                  <ProfileFooter />
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SearchComponent />
    </div>
  );
};

export default EndSectionSignedIn;

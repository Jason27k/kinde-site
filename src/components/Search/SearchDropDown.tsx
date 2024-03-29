"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { Slider } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { collections } from "@/lib/constants";
import { useRouter } from "next/navigation";

interface Props {
  isClicked: boolean;
  onClick: any;
  page: string;
  className?: string;
}

const MIN_YEAR = 1990;
const MAX_YEAR = 2025;
const MIN_EPISODES = 0;
const MAX_EPISODES = 150;
const MIN_DURATION = 0;
const MAX_DURATION = 170;

const SearchDropDown = ({ onClick, isClicked, page, className }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const years = searchParams.getAll("year-range");
  const yearRange =
    years.length == 2 ? [+years[0], +years[1]] : [MIN_YEAR, MAX_YEAR];
  const episodes = searchParams.getAll("episodes");
  const episodeRange =
    episodes.length == 2
      ? [+episodes[0], +episodes[1]]
      : [MIN_EPISODES, MAX_EPISODES];
  const duration = searchParams.getAll("duration");
  const durationRange =
    duration.length == 2
      ? [+episodes[0], +episodes[1]]
      : [MIN_DURATION, MAX_DURATION];
  const subFilters = [
    collections.AnimeStatus,
    collections.StreamingServices,
    collections.Countries,
    collections.SourceMaterial,
  ];

  const onChangeYear = (value: number[]) => {
    const beginning = `year-range=${value[0]}`;
    const end = `year-range=${value[1]}`;
  };

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has(name)) {
      params.delete(name);
    }
    if (value == null) {
      params.delete(name);
    } else {
      params.set(name, value);
    }

    return params.toString();
  };

  return (
    <div className={cn("relative", className)}>
      <Dropdown
        closeOnSelect={false}
        className="absolute -right-5 w-[737px] h-[215px] hidden md:block"
        onOpenChange={onClick}
      >
        <DropdownTrigger>
          <Button
            className={cn(
              "bg-[#f4f4f5] mt-[26px]",
              `${isClicked ? "text-blue-600" : "text-black"}`
            )}
          >
            <SlidersHorizontal size={24} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu className="w-full px-5 my-5">
          <DropdownItem variant="light" className="cursor-default">
            <div className="flex gap-6 justify-start mb-5">
              {subFilters.map((data) => (
                <Autocomplete
                  onSelectionChange={(value) =>
                    router.push(
                      `${pathName}?${createQueryString(
                        data.title.toLowerCase(),
                        value as string
                      )}`
                    )
                  }
                  isClearable
                  key={data.title}
                  label={data.title}
                  labelPlacement="outside"
                  placeholder="Any"
                  selectedKey={
                    searchParams.get(data.title.toLowerCase()) || undefined
                  }
                >
                  {data.collection.map((value) => (
                    <AutocompleteItem value={value} key={value}>
                      {value}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              ))}
            </div>
          </DropdownItem>
          <DropdownItem variant="light" className="cursor-default">
            <div className="flex gap-6 justify-start">
              <Slider
                label="Year Range"
                onChangeEnd={(value) => onChangeYear(value as number[])}
                step={1}
                minValue={MIN_YEAR}
                maxValue={MAX_YEAR}
                defaultValue={[yearRange[0], yearRange[1]]}
                formatOptions={{ useGrouping: false }}
                className="w-[180px]"
              />
              <Slider
                label="Episodes"
                step={1}
                minValue={MIN_EPISODES}
                maxValue={MAX_EPISODES}
                defaultValue={[episodeRange[0], episodeRange[1]]}
                formatOptions={{ useGrouping: false }}
                className="w-[180px]"
              />
              <Slider
                label="Duration"
                step={1}
                minValue={MIN_DURATION}
                maxValue={MAX_DURATION}
                defaultValue={[durationRange[0], durationRange[1]]}
                formatOptions={{ useGrouping: false }}
                className="w-[180px]"
              />
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SearchDropDown;

"use client";

import { Input } from "@nextui-org/react";
import { Hash, Search, SlidersHorizontal, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockData, rankedData } from "@/lib/mock";
import { cn } from "@/lib/utils";
import SearchResults from "./SearchResults";
import SearchInputs from "./SearchInputs";
import SearchSelect from "./SearchSelect";
import SearchInputsRow from "./SearchInputsRow";
import SearchDropDown from "./SearchDropDown";
import MangaSearchDropDown from "./MangaSearchDropDown";
import SearchRow from "./SearchRow";
import HorizontalCard from "./HorizontalCard";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import HorizontalSearchRow from "./HorizontalSearchRow";

interface Props {
  currentCategory: string;
}

const SearchFilters = ({ currentCategory }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClick = () => {
    setIsClicked((isClicked) => (isClicked = !isClicked));
  };

  const page = currentCategory.toLowerCase();

  return (
    <div className="flex flex-col gap-4 overflow-scroll no-scrollbar min-w-[405px] w-screen md:w-[90vw] lg:w-[85vw] xl:w-[75vw] max-w-[1200px] mx-auto p-4">
      <div className="flex items center gap-2 md:hidden">
        <h1 className="flex items-center">Browse</h1>
        <SearchSelect currentCategory={currentCategory} />
      </div>
      <div className="flex gap-2 md:hidden">
        <Input
          isClearable
          placeholder="Search"
          startContent={<Search />}
          className="shadow-lg"
        />
        <Button
          onClick={onClick}
          className={cn(
            "bg-[#f4f4f5] shadow-lg",
            `${isClicked ? "text-blue-600" : "text-black"}`
          )}
        >
          <SlidersHorizontal size={24} />
        </Button>
      </div>
      <div className="block md:hidden overflow-y-hidden">
        {isClicked && <SearchInputs page={page} />}
      </div>
      <div className="hidden md:flex gap-2 items-center justify-evenly">
        <div className="mt-4">
          <Input
            isClearable
            label="Search"
            labelPlacement="outside"
            startContent={<Search />}
          />
        </div>

        <SearchInputsRow
          page={page}
          className="md:w-[120px] lg:w-[150px] xl:w-[170px] mt-4"
        />

        {currentCategory === "Anime" ? (
          <SearchDropDown
            onClick={onClick}
            isClicked={isClicked}
            page={page}
            className="mt-4"
          />
        ) : (
          <MangaSearchDropDown
            onClick={onClick}
            isClicked={isClicked}
            page={page}
            className="mt-4"
          />
        )}
      </div>
      <div className="flex flex-col gap-4">
        <SearchResults title="Trending" page={"/search/" + page + "/trending"}>
          <SearchRow data={mockData} />
        </SearchResults>
        <SearchResults title="Top 100" page={"/search/" + page + "/top-100"}>
          <SearchRow data={mockData} />
        </SearchResults>
      </div>
      <div className="hidden md:block">
        <SearchResults
          title={`Top 100 ${currentCategory}`}
          page={`/search/${page}/top-100`}
          className="hidden md:block"
        >
          <div className="hidden lg:flex flex-col gap-6">
            <HorizontalSearchRow data={rankedData} ranked />
          </div>
          <div className="hidden md:block lg:hidden">
            <SearchRow data={rankedData} ranked />
          </div>
        </SearchResults>
      </div>
    </div>
  );
};

export default SearchFilters;

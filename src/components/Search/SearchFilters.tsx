"use client";

import { Input } from "@nextui-org/react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockData } from "@/lib/mock";
import { cn } from "@/lib/utils";
import SearchResults from "./SearchResults";
import SearchInputs from "./SearchInputs";
import SearchSelect from "./SearchSelect";

interface Props {
  currentCategory: string;
}

const SearchFilters = ({ currentCategory }: Props) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [genre, setGenre] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const [season, setSeason] = useState<string | null>(null);
  const [format, setFormat] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);

  const setters = {
    genre: setGenre,
    year: setYear,
    season: setSeason,
    format: setFormat,
    sort: setSort,
    status: setStatus,
    service: setService,
    country: setCountry,
    source: setSource,
  };

  const onClick = () => {
    setIsClicked((isClicked) => (isClicked = !isClicked));
  };

  const page = currentCategory.toLowerCase();

  return (
    <div className="flex flex-col gap-8 overflow-scroll no-scrollbar min-w-[405px] max-w-[80vw] mx-auto">
      <div className="flex items center gap-2">
        <h1 className="flex items-center">Browse</h1>
        <SearchSelect currentCategory={currentCategory} />
      </div>
      <div className="flex gap-2">
        <Input
          isClearable
          placeholder="Search"
          startContent={<Search />}
          className="shadow-lg"
        />
        <Button
          onClick={onClick}
          className={cn(
            "bg-white shadow-lg",
            `${isClicked ? "text-blue-600" : "text-black"}`
          )}
        >
          <SlidersHorizontal size={24} />
        </Button>
      </div>
      <div className="block md:hidden">
        {isClicked && <SearchInputs page={page} setStates={setters} />}
      </div>
      <SearchResults
        title="Trending"
        page={"/search/" + page + "/trending"}
        data={mockData}
      />
      <SearchResults
        title="Top 100"
        page={"/search/" + page + "/top-100"}
        data={mockData}
      />
    </div>
  );
};

export default SearchFilters;

"use client";

import Combox from "./Combox";
import { Input } from "@nextui-org/react";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  GenreCollection,
  YearCollection,
  SeasonCollection,
  AnimeFormats,
  MangaFormats,
  searchCategories,
  sortCollection,
  AnimeStatusCollection,
  MangaStatusCollection,
  streamingServices,
  readableOn,
  countries,
  sourceMaterial,
} from "@/lib/constants";

interface ComboWithClassesProps {
  data: string[];
  label: string;
}

const ComboWithClasses = ({ data, label }: ComboWithClassesProps) => {
  return (
    <Combox
      data={data}
      label={label}
      labelPlacement="outside"
      className="snap-start"
    />
  );
};

interface Props {
  currentCategory: string;
}

const SearchFilters = ({ currentCategory }: Props) => {
  const params = "/search/anime";
  const page = params.split("/").slice(-1)[0];
  let data = null;
  let format = null;
  let service = null;
  let serviceLabel = null;
  let status = null;
  if (page === "anime" || page === "manga") {
    data = GenreCollection;
    if (page === "anime") {
      format = AnimeFormats;
      service = streamingServices;
      serviceLabel = "Streaming On";
      status = AnimeStatusCollection;
    } else {
      format = MangaFormats;
      service = readableOn;
      serviceLabel = "Readable On";
      status = MangaStatusCollection;
    }
  }
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const onClick = () => {
    setIsClicked((isClicked) => (isClicked = !isClicked));
  };
  const fields = searchCategories.filter(
    (category) => category !== currentCategory
  );
  return (
    <div className="flex flex-col gap-8 overflow-scroll no-scrollbar">
      <div className="flex items center gap-2">
        <h1 className="flex items-center">Browse</h1>
        <div className="max-w-[155px]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder={currentCategory} />
            </SelectTrigger>
            <SelectContent>
              {fields.map((field) => (
                <SelectItem value={field} key={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          isClearable
          placeholder="Search"
          startContent={<Search />}
          className="shadow-lg max-w-sm"
        />
        <Button
          onClick={onClick}
          className={cn(
            "bg-white shadow-lg",
            `${isClicked ? "text-black" : "text-blue-600"}`
          )}
        >
          <SlidersHorizontal size={24} />
        </Button>
      </div>
      {data && (
        <div className="w-96 whitespace-nowrap overflow-x-scroll no-scrollbar snap-x">
          <div className="flex gap-8 w-max">
            <ComboWithClasses data={data} label="Genres" />
            <ComboWithClasses data={YearCollection} label="Year" />
            <ComboWithClasses data={SeasonCollection} label="Season" />
            <ComboWithClasses data={format!} label="Format" />
            <ComboWithClasses data={sortCollection} label="Sort" />
            <ComboWithClasses data={status!} label="Airing Status" />
            <ComboWithClasses data={service!} label={serviceLabel!} />
            <ComboWithClasses data={countries} label="Country Of Origin" />
            <ComboWithClasses data={sourceMaterial} label="Source Material" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;

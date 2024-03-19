"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ComboWithClasses from "./ComboWithClasses";
import { collections } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { Key } from "react";

interface Props {
  page: string;
  className?: string;
}

const SearchInputsRow = ({ page, className }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const format =
    page === "anime" ? collections.AnimeFormat : collections.MangaFormat;
  let mainFilters = [];
  if (page === "anime") {
    mainFilters = [
      collections.Genre,
      collections.Year,
      collections.Season,
      format,
    ];
  } else {
    mainFilters = [
      collections.Genre,
      format,
      collections.MangaStatus,
      collections.Countries,
    ];
  }
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
  const onChange = (value: Key, title: string) => {
    console.log("called");
    console.log(value, title);
    router.push(`${pathName}?${createQueryString(title, value as string)}`);
  };
  return (
    <>
      {mainFilters.map((filter) => (
        <div key={filter.title}>
          <ComboWithClasses
            data={filter.collection}
            label={filter.title}
            className={className}
            inputValue={searchParams.get(filter.title.toLowerCase())}
            onChange={onChange}
          />
        </div>
      ))}
    </>
  );
};

export default SearchInputsRow;

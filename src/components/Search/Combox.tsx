"use client";
import { cn } from "@/lib/utils";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Key } from "react";

interface Props {
  data: string[];
  label?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  className?: string;
  inputValue?: string | null;
  onChange?: (value: Key, title: string) => void;
}

const Combox = ({
  data,
  label,
  labelPlacement,
  className,
  inputValue,
  onChange,
}: Props) => {
  return (
    <div>
      <Autocomplete
        onSelectionChange={(value) =>
          onChange && onChange(value as string, label?.toLowerCase() as string)
        }
        placeholder="Any"
        className={cn("w-[170px] shadow-lg", className)}
        label={label}
        labelPlacement={labelPlacement}
        isClearable
        selectedKey={inputValue || undefined}
      >
        {data.map((value) => (
          <AutocompleteItem key={value} value={value}>
            {value}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default Combox;

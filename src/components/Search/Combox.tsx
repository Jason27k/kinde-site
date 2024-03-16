"use client";
import { cn } from "@/lib/utils";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface Props {
  data: string[];
  label?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  className?: string;
  setState: React.Dispatch<React.SetStateAction<string | null>>;
}

const Combox = ({
  data,
  label,
  labelPlacement,
  className,
  setState,
}: Props) => {
  return (
    <div>
      <Autocomplete
        onSelectionChange={(value) => setState(value as string)}
        placeholder="Any"
        className={cn("w-[170px] shadow-lg", className)}
        label={label}
        labelPlacement={labelPlacement}
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

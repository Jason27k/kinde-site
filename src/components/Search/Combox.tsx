"use client";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

interface Props {
  data: string[];
}

const Combox = ({ data }: Props) => {
  return (
    <div>
      <Autocomplete placeholder="Any" className="max-w-xs">
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

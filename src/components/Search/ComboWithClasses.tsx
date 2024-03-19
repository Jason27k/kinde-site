import { Key } from "react";
import Combox from "./Combox";
import { cn } from "@/lib/utils";

interface ComboWithClassesProps {
  data: string[];
  label: string;
  className?: string;
  inputValue?: string | null;
  onChange?: (value: Key, title: string) => void;
}
const ComboWithClasses = ({
  data,
  label,
  className,
  inputValue,
  onChange,
}: ComboWithClassesProps) => {
  return (
    <Combox
      data={data}
      label={label}
      labelPlacement="outside"
      className={cn("snap-start shadow-none", className)}
      inputValue={inputValue}
      onChange={onChange}
    />
  );
};

export default ComboWithClasses;

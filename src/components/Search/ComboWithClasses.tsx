import Combox from "./Combox";
import { cn } from "@/lib/utils";

interface ComboWithClassesProps {
  data: string[];
  label: string;
  className?: string;
}

const ComboWithClasses = ({
  data,
  label,
  className,
}: ComboWithClassesProps) => {
  return (
    <Combox
      data={data}
      label={label}
      labelPlacement="outside"
      className={cn("snap-start shadow-none", className)}
    />
  );
};

export default ComboWithClasses;

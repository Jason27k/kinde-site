import Combox from "./Combox";

interface ComboWithClassesProps {
  data: string[];
  label: string;
  setState: React.Dispatch<React.SetStateAction<string | null>>;
}

const ComboWithClasses = ({ data, label, setState }: ComboWithClassesProps) => {
  return (
    <Combox
      data={data}
      label={label}
      labelPlacement="outside"
      className="snap-start"
      setState={setState}
    />
  );
};

export default ComboWithClasses;

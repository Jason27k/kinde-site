import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { searchCategories } from "@/lib/constants";

interface Prop {
  currentCategory: string;
}

const SearchSelect = ({ currentCategory }: Prop) => {
  const router = useRouter();

  const fields = searchCategories.filter(
    (category) => category !== currentCategory
  );
  return (
    <div className="max-w-[155px]">
      <Select
        onValueChange={(value) =>
          router.push("/search/" + value.toLocaleLowerCase())
        }
      >
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
  );
};

export default SearchSelect;

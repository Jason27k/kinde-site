import Link from "next/link";

interface Props {
  title: string;
  page: string;
  children: React.ReactNode;
  className?: string;
}

const SearchResults = ({ title, page, children, className }: Props) => {
  return (
    <div className={className}>
      <div className="flex justify-between">
        <h1 className="text-2xl">{title.toUpperCase()}</h1>
        <Link href={page}>View All</Link>
      </div>
      {children}
    </div>
  );
};

export default SearchResults;

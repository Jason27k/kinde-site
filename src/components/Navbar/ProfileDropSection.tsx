import Link from "next/link";
interface Props {
  baseUrl: string;
  title: string;
  children: React.ReactNode;
}

const ProfileDropSection = ({ baseUrl, title, children }: Props) => {
  return (
    <div>
      <div className="grid gap-3 grid-cols-[.2fr_1fr] group">
        <Link
          href={baseUrl}
          className="text-muted-foreground hover:text-gray-800 row-span-full flex gap-4 group-hover:text-gray-800"
        >
          {children}
          <p className="text-center">{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropSection;

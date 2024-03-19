import Link from "next/link";
interface Props {
  baseUrl: string;
  title: string;
  links: { href: string; label: string }[];
  children: React.ReactNode;
}

const DropSection = ({ baseUrl, title, links, children }: Props) => {
  return (
    <div className="">
      <div className="grid gap-3 grid-cols-[.2fr_1fr] group">
        <Link
          href={baseUrl}
          className="row-span-full text-muted-foreground group-hover:text-gray-800"
        >
          {children}
        </Link>
        <div className="-mt-2">
          <Link
            href={baseUrl}
            className="text-muted-foreground hover:text-gray-800"
          >
            <p className="">{title}</p>
          </Link>
          <div className="text-[12px] flex flex-row justify-start gap-4 w-full text-muted-foreground">
            {links.map(({ href, label }) => (
              <Link
                href={`${baseUrl}/${href}`}
                className="hover:text-gray-800 text-center text-nowrap"
                key={label}
              >
                <p className="text-center text-nowrap">{label}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropSection;

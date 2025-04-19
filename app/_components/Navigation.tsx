import Image from "next/image";
import Link from "next/link";
export const navigationItems = [
  { text: "صفحه اصلی", href: "/" },
  { text: "توسعه دهندگان", href: "/" },
  { text: "ویژگی ها", href: "/" },
  { text: "درباره برنامه", href: "/" },
];
const Navigation = () => {
  return (
    <div role="tablist" className="tabs">
      {navigationItems.map((nav, index) => (
        <Link
          role="tab"
          className=" tab !text-custome-black hover:!text-custome-orange-2 "
          href={nav.href}
          key={index}
        >
          {index === 0 && (
            <div  className="relative size-3.5 ml-1">
              <Image className="object-center" fill src={"/SVGs/Star 2.svg"} alt="Star-2" />
            </div>
          )}
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

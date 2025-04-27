import Image from "next/image";
import Link from "next/link";
export const navigationItems = [
  { text: "صفحه اصلی", href: "#main" },
  { text: "توسعه دهندگان", href: "#developers" },
  { text: "ویژگی ها", href: "#features" },
  { text: "درباره برنامه", href: "/" },
];
interface NavigationPropsType {
  isShow?: boolean;
}
const Navigation = ({ isShow}: NavigationPropsType) => {
  return (
    <div role="tablist" className="tabs justify-center">
      {navigationItems.map((nav, index) => (
        <Link
          role="tab"
          className=" tab dark:!text-white !text-custome-black hover:!text-custome-orange-2 font-[600] "
          href={nav.href}
          key={index}
        >
          {index === 0 && isShow && (
            <div className="relative size-3.5 ml-1">
              <Image
                className="object-center"
                fill
                src={"/SVGs/Star 2.svg"}
                alt="Star-2"
              />
            </div>
          )}
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

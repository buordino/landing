import Link from "next/link";

const navigationItems = [
  { text: "صفحه اصلی", href: "/" },
  { text: "توسعه دهندگان", href: "/" },
  { text: "ویژگی ها", href: "/" },
  { text: "درباره برنامه", href: "/" },
];
const Navigation = () => {
  return (
    <div role="tablist" className="tabs">
      {navigationItems.map((nav,index) => (
        <Link role="tab" className="tab text-custome-black" href={nav.href} key={index}>
          {nav.text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

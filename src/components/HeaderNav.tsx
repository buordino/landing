import Link from "next/link";

const navItems = [
  { label: "درباره اپلیکیشن", href: "/" },
  { label: "راهنما", href: "/" },
  { label: "توسعه دهندگان", href: "/" },
];
const HeaderNav = () => {
  return (
    <nav className="hidden md:block">
      <div className="rounded-full border-solid border-2 border-light-primary bg-dark-sky px-8 py-6">
        <ul className="flex flex-row items-center justify-between gap-[60px] pb-1">
          <li>
            <Link
              href={"/"}
              className="bg-light-sky mt-1 pb-2.5 pt-1.5 px-5 rounded-full shadow-3xl"
            >
              <span className="text-[16px] font-normal">downlaod</span>
            </Link>
          </li>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                <span className="text-[16px] font-normal">{navItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;

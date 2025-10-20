import Link from "next/link";

const navItems = [
  { label: "درباره اپلیکیشن", href: "/" },
  { label: "راهنما", href: "/" },
  { label: "توسعه دهندگان", href: "/" },
];
const HeaderNav = () => {
  return (
    <nav>
      <div className="rounded-full border-solid border-2 border-light-primary bg-dark-sky px-8 py-5">
        <ul className="flex flex-row items-center justify-between gap-[60px] pb-1">
          <li>
            <Link
              href={"/"}
              className="bg-[#5C74A7] mt-1 pb-2.5 pt-1.5 px-5 rounded-full"
            >
              <span className="text-sm font-medium">downlaod</span>
            </Link>
          </li>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.href}>
                <span className="text-sm font-normal">{navItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;

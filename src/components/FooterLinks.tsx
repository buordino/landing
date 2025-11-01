import Link from "next/link";
import React from "react";
import ArrowLeft from "./ui/icons/ArrowLeft";

const items = [
  { label: "درباره برنامه", href: "/" },
  { label: "ویژگی ها", href: "/" },
  { label: "توسعه دهندگان", href: "/" },
  { label: "صفحه اصلی", href: "/" },
];

const FooterLinks = () => {
  return (
    <>
      <ul className="flex flex-col items-stretch gap-5">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex flex-row items-center gap-1 "
            >
              <span className="font-medium text-sm sm:text-base">{item.label}</span>
              <ArrowLeft className="fill-[#AFC3EB] size-4 pt-1 hidden 2lg:block" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;

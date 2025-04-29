import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const apps = [
  { href: "/", icon: <FaInstagram size={25} />, color: "#59168b" },
  { href: "/", icon: <TiSocialYoutube size={25} />, color: "#e7000b" },
];
const FooterAppsLinks = () => {
  return (
    <ul className="flex items-center gap-10 sm:gap-3">
      {apps.map((app, index) => (
        <li key={index + 1}>
          <Link
            className={`transition-all duration-150 dark:text-white  ${
              app.color === "#59168b"
                ? "hover:text-[#59168b]"
                : "hover:text-[#e7000b]"
            } `}
            href={app.href}
          >
            {app.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterAppsLinks;

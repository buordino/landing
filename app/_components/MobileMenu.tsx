import { IoMdMenu } from "react-icons/io";
import { navigationItems } from "./Navigation";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn text-white bg-custome-orange-2 cursor-pointer">
        <IoMdMenu size={22} color="white" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl"
      >
        {navigationItems.map((nav,index)=><li className="py-1 transition-all duration-100 hover:text-custome-orange-2" key={index}>
            <Link href={nav.href}>{nav.text}</Link>
        </li>)}
      </ul>
    </div>
  );
};

export default MobileMenu;

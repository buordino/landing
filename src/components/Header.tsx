import HeaderNav from "./HeaderNav";
import ThemeController from "./ThemeController";
import HeaderCircleDark from "./ui/icons/HeaderCircleDark";
import HeaderCircleDarkSmall from "./ui/icons/HeaderCircleDarkSmall";
import HeaderCircleLight from "./ui/icons/HeaderCircleLight";
import HeaderCircleLightSmall from "./ui/icons/HeaderCircleLightSmall";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header>
      <div className="px-4 lg:px-[75px] pt-2 md:pt-6 flex flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto">
        <Logo />
        <HeaderNav />
        <ThemeController />
      </div>
      <div className="hidden md:inline-block absolute left-0 top-0 z-[-2]">
        <HeaderCircleDark />
      </div>{" "}
      <div className="inline-block md:hidden absolute left-0 top-0 z-[-2]">
        <HeaderCircleDarkSmall />
      </div>
      <div className="hidden md:inline-block absolute left-0 top-0 z-[-2]">
        <HeaderCircleLight />
      </div>{" "}
      <div className="md:hidden inline-block absolute left-0 top-0 z-[-2]">
        <HeaderCircleLightSmall />
      </div>
    </header>
  );
};

export default Header;

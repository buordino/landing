import HeaderNav from "./HeaderNav";
import ThemeController from "./ThemeController";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header>
      <div className="px-4 lg:px-[75px] pt-2 md:pt-6 flex flex-row items-center justify-between gap-4 max-w-[1200px] mx-auto">
        <Logo />
        <HeaderNav />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;

import HeaderNav from "./HeaderNav";
import ThemeController from "./ThemeController";
import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header>
      <div className="px-[75px] pt-6 flex flex-row items-center justify-between max-w-[1300px] mx-auto">
        <Logo />
        <HeaderNav />
        <ThemeController />
      </div>
    </header>
  );
};

export default Header;

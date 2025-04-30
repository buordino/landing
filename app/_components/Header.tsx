import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="dark:bg-custome-black">
      <div className="flex justify-between md:justify-normal items-center px-6 sm:px-12 md:px-28 py-4">
        <div>
          <ThemeSwitcher />
        </div>
        <div className="hidden md:grow md:flex md:items-center md:justify-center">
          <Navigation isShow />
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;

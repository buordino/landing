import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between md:justify-normal items-center px-12 md:px-28 py-4">
        <div className="hidden md:grow md:flex md:items-center md:justify-center">
          <Navigation />
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

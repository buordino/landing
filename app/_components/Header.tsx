import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="flex items-center px-12 py-4">
        <div className="hidden sm:grow sm:flex sm:items-center sm:justify-center">
          <Navigation />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;

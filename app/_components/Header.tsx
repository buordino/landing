import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="flex items-center px-12 py-4">
        <div className="grow flex items-center justify-center">
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

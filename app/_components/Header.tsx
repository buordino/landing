import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="flex items-center px-12 py-4">
        <div className="grow flex items-center justify-center">nav</div>
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default Header;

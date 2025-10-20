import Logo from "./ui/Logo";

const Header = () => {
  return (
    <header>
      <div className="px-[75px] pt-2 flex flex-row items-center justify-between max-w-[1300px] mx-auto">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

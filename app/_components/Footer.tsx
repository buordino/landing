import FooterAppsLinks from "./FooterAppsLinks";
import FooterLines from "./FooterLines";
import FooterStarsWrraper from "./FooterStarsWrraper";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="w-full pt-14 pb-20 dark:bg-custome-black relative  border-t border-solid border-[#00000033] dark:border-white/15 md:border-none">
      <FooterLines />
      <FooterStarsWrraper />

      <div className="flex flex-col items-center justify-center ">
        <Logo />
        <div className="mt-6">
          <Navigation isShow={false} />
        </div>
        <div className="mt-8 z-[2]">
          <FooterAppsLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

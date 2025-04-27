import FooterAppsLinks from "./FooterAppsLinks";
import FooterStarsWrraper from "./FooterStarsWrraper";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="pt-16 pb-20 dark:bg-custome-black border-t border-solid dark:border-white/15 border-[#00000033]/60 relative">
      <FooterStarsWrraper />

      <div className="flex flex-col  items-center justify-center">
        <Logo />
        <div className="mt-6">
          <Navigation isShow={false} />
        </div>
        <div className="mt-8">
          <FooterAppsLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

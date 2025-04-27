import Logo from "./Logo";
import Navigation from "./Navigation"

const Footer = () => {
  return (
    <footer className="pt-16 pb-20 border-t border-solid border-[#00000033]/90">
      <div className="flex flex-col  items-center justify-center">
        <Logo/>
        <div className="mt-6">
        <Navigation />

        </div>
        <div className="mt-8">

        </div>
      </div>
    </footer>
  );
}

export default Footer
import MoonIcon from "./ui/icons/MoonIcon";
import SunIcon from "./ui/icons/SunIcon";

const ThemeController = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="synthwave" />

      {/* sun icon */}
      <SunIcon className="stroke-white swap-off w-[35px] h-[35px] sm:h-10 sm:w-10" />

      {/* moon icon */}
      <MoonIcon className="swap-on w-[35px] h-[35px] sm:h-10 sm:w-10 fill-current" />
    </label>
  );
};

export default ThemeController;

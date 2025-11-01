import Link from "next/link";
import InstagramIcon from "./ui/icons/InstagramIcon";
import YoutubeIcon from "./ui/icons/YoutubeIcon";
import SMSIcon from "./ui/icons/SMSIcon";
import CallIcon from "./ui/icons/CallIcon";
import LocationIcon from "./ui/icons/LocationIcon";
import Logo from "./ui/Logo";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import ScrollToTopButton from "./ui/ScrollToTopButton";
import FooterSquare from "./ui/icons/FooterSquare";

const contactItems = [
  {
    label: "info@pilsun.com",
    icon: (
      <SMSIcon className={"w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-none"} />
    ),
  },
  {
    label: "021662627",
    icon: <CallIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-white" />,
  },
  {
    label:
      "قم ، میدان عباسی میدان گلها بلوار گلها خیابان مرداد دوم غربی پلاک 4",
    icon: (
      <LocationIcon className="w-9 h-9 sm:w-10 sm:h-10 stroke-white fill-none pb-4" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="block 2lg:max-w-[1250px] mx-6 2lg:mx-auto mt-72 px-4 lg:px-[75px] mb-12">
      <div className="relative w-full bg-secondary rounded-2xl pt-7 pb-4 px-4 sm:px-9 shadow-5xl flex flex-col 2lg:flex-row items-start">
        <div>
          <p className="font-light sm:font-medium text-xs sm:text-sm leading-6 sm:leading-8 w-full 2lg:w-[340px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="hidden mt-12 2lg:flex flex-row items-center gap-6">
            <p className="font-medium text-sm leading-8">
              ما را در شبکه های اجتماعی دنبال کنید
            </p>
            <div className="flex flex-row items-center gap-3">
              <Link href={"/"}>
                <InstagramIcon className="w-7 h-7 fill-white" />
              </Link>
              <Link href={"/"}>
                <YoutubeIcon className="w-6 h-6 fill-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-between gap-12 sm:gap-0 mt-7 sm:mt-5 2lg:mt-0">
          <div className="2lg:mr-24 w-3/5 sm:w-44">
            <FooterLinks />
          </div>
          <div className="2lg:mr-24 2lg:mt-5">
            <ul className="flex flex-col gap-2.5 sm:gap-4">
              {contactItems.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-row items-center gap-2 sm:gap-2.5">
                    {item.icon}
                    <span className="text-sm sm:text-base font-light sm:font-medium">
                      {item.label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start justify-end">
              <div className="flex flex-row items-center gap-7">
                <Logo />
                <Image
                  src={"/images/nemad.png"}
                  alt="nemad.png"
                  width={100}
                  height={80}
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 -top-16">
          <ScrollToTopButton />
        </div>
      </div>
      <div className="-z-[2] absolute -bottom-10 right-0">
        <FooterSquare />
      </div>
    </footer>
  );
};

export default Footer;

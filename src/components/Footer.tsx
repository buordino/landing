import Link from "next/link";
import InstagramIcon from "./ui/icons/InstagramIcon";
import YoutubeIcon from "./ui/icons/YoutubeIcon";
import ArrowLeft from "./ui/icons/ArrowLeft";

const Footer = () => {
  return (
    <footer className="block max-w-[1200px] mx-auto mt-72 px-4 lg:px-[75px] mb-12">
      <div className="w-full bg-secondary rounded-2xl py-7 px-10 shadow-5xl flex flex-row items-start">
        <div>
          <p className="font-medium text-sm leading-8 w-[340px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="mt-12 flex flex-row items-center gap-6">
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
        <div className="mr-24">
          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex flex-row items-center gap-0.5">
                <Link href={"/"} className="font-medium text-base">
                  درباره برنامه
                </Link>
                <ArrowLeft className="fill-[#AFC3EB] size-4 pt-1" />
              </div>
            </li>{" "}
            <li>
              <div className="flex flex-row items-center gap-0.5">
                <Link href={"/"} className="font-medium text-base">
                  ویژگی ها{" "}
                </Link>
                <ArrowLeft className="fill-[#AFC3EB] size-4 pt-1" />
              </div>
            </li>{" "}
            <li>
              <div className="flex flex-row items-center gap-0.5">
                <Link href={"/"} className="font-medium text-base">
                  توسعه دهندگان{" "}
                </Link>
                <ArrowLeft className="fill-[#AFC3EB] size-4 pt-1" />
              </div>
            </li>{" "}
            <li>
              <div className="flex flex-row items-center gap-0.5">
                <Link href={"/"} className="font-medium text-base">
                  صفحه اصلی{" "}
                </Link>
                <ArrowLeft className="fill-[#AFC3EB] size-4 pt-1" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import InstagramIcon from "./ui/icons/InstagramIcon";
import YoutubeIcon from "./ui/icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="block max-w-[1200px] mx-auto mt-72 px-4 lg:px-[75px] mb-12">
      <div className="w-full bg-secondary rounded-2xl py-7 px-10 block shadow-5xl">
        <div>
          <p className="font-medium text-sm leading-8">
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
              <InstagramIcon className="w-7 h-7 fill-white" />
              <YoutubeIcon className="w-6 h-6 fill-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

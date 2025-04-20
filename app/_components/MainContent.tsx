import Button from "./Button";
import { TiDownload } from "react-icons/ti";
import { FaGooglePlay } from "react-icons/fa";
import Statistics from "./Statistics";
import GroupGrayStars from "./GroupGrayStars";

const MainContent = () => {

  return (
    <div className="basis-[50%] order-1 2lg:order-none">
      <h1 className="font-bold text-center 2lg:text-right text-2xl  md:text-5xl leading-[45px] md:leading-[75px] mb-6">
        لورم ایپسوم لورم ایپسو ایپسوم لورم لورم ایپررورم
      </h1>
      <div className="flex items-center gap-2">
        <GroupGrayStars />
        <p className="text-center text-sm sm:text-base 2lg:text-right 2lg:w-[70%] leading-[30px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نام لورم ایپسوم متن ساختگی با
          تولید سادگی نام
        </p>
      </div>
      <div className="mt-7 flex justify-center 2lg:justify-normal items-center gap-3">
        <Button>
          <div className="flex items-center gap-2 ">
            <TiDownload size={15} />
            <span>دانلود مستقیم</span>
          </div>
        </Button>
        <Button>
          <div className="flex items-center gap-2 ">
            <FaGooglePlay size={15} />
            <span>دانلود از گوگل پلی</span>
          </div>
        </Button>
      </div>
      <div className="mt-11 flex items-center gap-2">
        <Statistics size="small" number={1000} title="دانلود" />
        <Statistics size="large" number={1000} title="کاربر راضی" />
      </div>
    </div>
  );
};

export default MainContent;

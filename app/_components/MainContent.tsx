import Button from "./Button";
import { TiDownload } from "react-icons/ti";
import { FaGooglePlay } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="basis-[50%]">
      <h1 className="font-bold text-5xl leading-[75px] mb-6">
        لورم ایپسوم لورم ایپسو ایپسوم لورم لورم ایپررورم
      </h1>
      <p className="w-[70%] leading-[30px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نام لورم ایپسوم متن ساختگی با
        تولید سادگی نام
      </p>
      <div className="mt-7 flex items-center gap-3">
        <Button>
          <div className="flex items-center gap-2 ">
            <TiDownload size={15}  />
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
      <div className="mt-9 flex items-center gap-2">
          
      </div>
    </div>
  );
};

export default MainContent;

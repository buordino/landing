import Button from "./Button";

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
        <Button>دانلود مستقیم</Button>
        <Button>دانلود از گوگل پلی</Button>
      </div>
    </div>
  );
}

export default MainContent
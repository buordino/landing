import Image from "next/image";
import FeatureTexts from "./FeatureTexts";

const FeatureContent = () => {
  return (
    <div className="flex flex-col 2lg:flex-row items-start justify-between gap-6">
      <div className="2lg:w-[30%] pt-2 2lg:pt-18">
        <FeatureTexts
          symbol="star"
          texts={[
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
          ]}
        />
      </div>
      <div className="h-[600px] 2lg:h-[650px] relative w-[300px] mx-auto 2lg:mx-0 2lg:w-[25%]">
        <Image
          fill
          className="object-center"
          alt="mobile-img"
          src={"/images/Group-41.png"}
        />
      </div>
      <div className="2lg:w-[30%] pt-6 2lg:pt-18">
        <FeatureTexts
          symbol="number"
          texts={[
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
          ]}
        />
      </div>
    </div>
  );
}

export default FeatureContent
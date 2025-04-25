import Image from "next/image";
import FeatureTexts from "./FeatureTexts";
import SectionTitle from "./SectionTitle";

const FeaturesSection = () => {
  return (
    <section id="features">
      <SectionTitle>ویژگی ها</SectionTitle>
      <div className="relative">
        <div className="absolute w-[100%] bg-gradient-to-b from-custome-orange-1 to-circle-color blur-[125px]   left-0 right-0 top-0 bottom-[25%] mx-auto rounded-b-[100%]"></div>
        <div className="relative py-22 px-5 sm:px-12 2lg:px-42">
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
            <div className="h-[600px] relative w-[300px] mx-auto 2lg:mx-0 2lg:w-[25%]">
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
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

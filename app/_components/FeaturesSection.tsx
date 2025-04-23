import Image from "next/image";
import FeatureTexts from "./FeatureTexts"
import SectionTitle from "./SectionTitle"

const FeaturesSection = () => {
  return (
    <section id="features">
      <SectionTitle>ویژگی ها</SectionTitle>
      <div className="py-22 px-16 md:px-42">
        <div className="flex items-center justify-between gap-6">
          <div className="w-[30%]">
            <FeatureTexts
              symbol="star"
              texts={[
                "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
                "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
                "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
              ]}
            />
          </div>
          <div className="h-[600px] relative w-[25%]">
            <Image
              fill
              className="object-center"
              alt="mobile-img"
              src={"/images/Group-41.png"}
            />
          </div>
          <div className="w-[30%]">
            <FeatureTexts
              symbol="number"
              texts={[
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati nulla reprehenderit fugiat harum delectus!",
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non obcaecati nulla reprehenderit fugiat harum delectus!",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection
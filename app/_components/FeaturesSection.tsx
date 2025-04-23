import FeatureTexts from "./FeatureTexts"
import SectionTitle from "./SectionTitle"

const FeaturesSection = () => {
  return (
    <section id="features">
      <SectionTitle>ویژگی ها</SectionTitle>
      <div className="py-22 px-16 md:px-42">
        <FeatureTexts
          symbol="star"
          texts={[
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
            "لورم ایپسوم متن ساختگی با تولیسادگی ناملورمایپسوم متساختگی با تولیسادگی نام لورم ایپ",
          ]}
        />
      </div>
    </section>
  );
}

export default FeaturesSection
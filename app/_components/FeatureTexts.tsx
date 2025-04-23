import Image from "next/image";

interface FeatureTextsPropsType {
  texts: string[];
  symbol: "number" | "star";
}
const FeatureTexts = ({ texts, symbol }: FeatureTextsPropsType) => {
  return (
    <div className="flex flex-col gap-6">
      {texts.map((text, index) => (
        <div
          className="font-semibold text-custome-black flex items-start gap-2"
          key={index + 1}
        >
          {symbol === "number" ? (
            <span className="font-bold text-custome-orange-2">
              {index + 1})
            </span>
          ) : (
            <div className="relative w-[24px] h-[20px]">
              <Image
                fill
                className="object-center"
                alt="star-1"
                src={"/images/small-star-2.png"}
              />
            </div>
          )}
          <p className="text-justify text-lg leading-[40px]">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureTexts;

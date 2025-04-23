interface FeatureTextsPropsType {
  texts: string[];
  symbol: "number" | "star";
}
const FeatureTexts = ({ texts, symbol }: FeatureTextsPropsType) => {

  return <div className="flex flex-col gap-5">
    {texts.map((text,index)=><div className="font-semibold text-custome-black flex items-start gap-2" key={index+1}>
      
    <p>{text}</p>      

    </div>)}

  </div>;
};

export default FeatureTexts;

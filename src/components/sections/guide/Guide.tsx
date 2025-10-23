import GuidesList from "./GuidesList";
import SectionTitle from "../../ui/SectionTitle";
import GuideImages from "./GuideImages";

const Guide = () => {
  return (
    <section>
      <div className="mt-32">
        <SectionTitle>راهنمای بـردیـنـو</SectionTitle>
        <div className="mt-14 bg-light-primary rounded-lg border border-solid border-background py-5 px-5 shadow-inner">
          <div className="flex flex-row items-start gap-9">
            <div className="basis-lg">
              <GuidesList />
            </div>
            <div className="grow">
              <GuideImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

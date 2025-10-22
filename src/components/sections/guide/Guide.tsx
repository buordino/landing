import GuidesList from "./GuidesList";
import SectionTitle from "../../ui/SectionTitle";

const Guide = () => {
  return (
    <section>
      <div className="mt-32">
        <SectionTitle>راهنمای بـردیـنـو</SectionTitle>
        <div className="mt-14 bg-light-primary rounded-lg border border-solid border-background py-5 px-5">
          <div className="flex flex-row items-start">
            <div className="basis-lg">
              <GuidesList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;

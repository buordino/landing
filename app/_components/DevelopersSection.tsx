import DevelopersList from "./DevelopersList";
import SectionTitle from "./SectionTitle";

const DevelopersSection = () => {
  return (
    <section id="developers" className="bg-white dark:bg-custome-black pt-32">
      <SectionTitle>توسعه دهندگان</SectionTitle>
      <div className="pt-18 pb-28 px-12  2lg:px-42">
        <div>
          <DevelopersList />
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

import DevelopersList from "./DevelopersList";
import SectionTitle from "./SectionTitle";

const DevelopersSection = () => {
  return (
    <section id="developers">
      <SectionTitle>توسعه دهندگان</SectionTitle>
      <div className="py-22 px-12  2lg:px-42">
        <div>
          <DevelopersList />
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

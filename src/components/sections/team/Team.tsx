import SectionTitle from "@/components/ui/SectionTitle";
import TeamList from "./TeamList";

const Team = () => {
  return (
    <section>
      <div className="mt-14">
        <SectionTitle>تیم بـردیـنـو</SectionTitle>
        <div className="mt-22">
          <TeamList />
        </div>
      </div>
    </section>
  );
};

export default Team;

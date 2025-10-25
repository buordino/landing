import SectionTitle from "@/components/ui/SectionTitle";
import TeamItems from "./TeamItems";

const Team = () => {
  return (
    <section>
      <div className="mt-14">
        <SectionTitle>تیم بـردیـنـو</SectionTitle>
        <div className="mt-22">
          <ul className="flex flex-row items-center justify-between gap-20">
            {[1, 2, 3, 4].map((item) => (
              <TeamItems
                key={item}
                teamMember={{
                  name: "علی محمودی",
                  avatar: "/images/developer-mock.png",
                  field: "Backend Developer",
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;

import MainContent from "./MainContent"

const IntroductionSection = () => {
  return (
    <section id="main">
      <div className="py-22 px-42">
        <div className="flex items-center justify-between gap-10">
          <MainContent />
          <div className="bg-yellow-300 basis-[50%]">ss</div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection
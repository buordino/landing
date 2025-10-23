import Image from "next/image";

const imagesSrc = {
  firstRow: [
    { src: "/images/home-1.png", isAlignStart: true },
    { src: "/images/home-2.png", isAlignStart: false },
    { src: "/images/home-3.png", isAlignStart: true },
  ],
  secondRow: [
    { src: "/images/home-4.png", isAlignStart: true },
    { src: "/images/home-5.png", isAlignStart: false },
    { src: "/images/home-6.png", isAlignStart: true },
  ],
};

const GuideImages = () => {
  return (
    <div>
      <div className="flex flex-row-reverse items-start gap-1.5 ">
        {imagesSrc.firstRow.map((item, index) => (
          <div
            className={`relative w-40 h-80 ${item.isAlignStart && "mt-14"}`}
            key={index}
          >
            <Image
              src={item.src}
              alt={item.src}
              fill
              className="object-cnter rounded-md"
              quality={100}
            />
          </div>
        ))}
      </div>{" "}
      <div className="flex flex-row items-start gap-1.5 -mt-9">
        {imagesSrc.secondRow.map((item, index) => (
          <div
            className={`relative w-40 h-80 ${item.isAlignStart && "mt-14"}`}
            key={index}
          >
            <Image
              src={item.src}
              alt={item.src}
              fill
              className="object-center rounded-md"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideImages;

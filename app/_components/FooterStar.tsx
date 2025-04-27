import Image from "next/image";

const FooterStar = () => {
  return (
    <span className="size-[40px] absolute left-5 top-3">
      <Image
        src={"/images/star-footer.png"}
        alt="star-img"
        fill
        className="object-cover"
      />
    </span>
  );
};

export default FooterStar;

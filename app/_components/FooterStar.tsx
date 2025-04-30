"use client";
import Image from "next/image";
import { motion } from "framer-motion";
interface FooterStarPropsType {
  left: string;
  top: string;
}
const FooterStar = ({ left, top }: FooterStarPropsType) => {
  return (
    <motion.span
    drag
      animate={{
        rotate: [0, 180, 360],
        x: [0, 10, 0, -10, 0],
        y: [0, -10, 0, 10, 0],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className={`size-[35px] absolute  `}
      style={{ left: left, top: top }}
    >
      <Image
        src="/images/star-footer.png"
        alt="star-img"
        fill
        className="object-cover"
      />
    </motion.span>
  );
};

export default FooterStar;

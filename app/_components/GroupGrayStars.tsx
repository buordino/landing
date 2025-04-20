"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const GroupGrayStars = () => {
  return (
    <div className="hidden sm:flex flex-col gap-1">
      <motion.div
        transition={{ duration: "2", repeat: Infinity }}
        animate={{ rotate: 360 }}
        className="relative w-[15px] h-[15px]"
      >
        <Image
          alt="star-1"
          className="object-cover"
          fill
          src={"/images/star-group-1.png"}
        />
      </motion.div>
      <motion.div
        transition={{ duration: "2", repeat: Infinity }}
        animate={{ rotate: -360 }}
        className="relative w-[25px] h-[25px]"
      >
        <Image
          alt="star-2"
          className="object-cover"
          fill
          src={"/images/star-group-2.png"}
        />
      </motion.div>
    </div>
  );
};

export default GroupGrayStars;

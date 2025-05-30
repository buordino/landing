"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 350) {
        setVisible(true);
      } else if (scrolled <= 350) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

 

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          transition={{ duration: "0.3" }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          onClick={scrollToTop}
          className="w-[52px] h-[52px] z-[1000] shadow-md fixed cursor-pointer left-0.5 bottom-14 bg-custome-orange-2 flex justify-center items-center rounded-[100%]"
        >
          <FaChevronUp fill="white" size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollBtn;

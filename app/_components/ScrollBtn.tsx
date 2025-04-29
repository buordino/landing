"use client";

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

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="w-[52px] h-[52px] z-[1000] shadow-md fixed cursor-pointer left-4 bottom-20 bg-custome-orange-2 flex justify-center items-center rounded-[100%]"
    >
      <FaChevronUp fill="white" size={22} />
    </button>
  );
};

export default ScrollBtn;

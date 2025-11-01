"use client";

import ArrowUp from "./icons/ArrowUp";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="size-10 sm:size-14 bg-secondary rounded-full flex items-center justify-center cursor-pointer shadow-8xl sm:shadow-6xl"
    >
      <ArrowUp className="fill-white w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;

"use client";

import { staticTeamWorkers } from "@/constants/staticTeamWorkers";
import TeamItems from "./TeamItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const TeamList = () => {
  return (
    <div>
      {" "}
      <Swiper
        loop={true}
        direction="horizontal"
        slidesPerView={4}
        spaceBetween={80}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 80 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          470: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {staticTeamWorkers.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <TeamItems teamMember={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamList;

import Image from "next/image";
import React from "react";

const Teams = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 px-5 py-2 backdrop-blur-[3px] border-1 border-[#6a728226] bg-[#78727226]">
      <div className="col-span-4 text-center h-full w-full flex justify-center items-center lg:col-span-3 lg:w-full md:col-span-4">
        <p className=" text-sm lg:text-2xl">
          Get to know all the teams in the Dota 2 community
        </p>
      </div>
      <div
        className="flex justify-center  col-span-4 h-full w-full pt-5 pb-5 
     lg:col-span-1 lg:w-full 
     md:col-span-4  "
      >
        <Image
          width={400}
          height={400}
          src="/images/teams.jpeg"
          alt=""
          className="lg:w-full lg:h-[280px] md:h-[350px]  rounded-2xl "
        />
      </div>
    </div>
  );
};

export default Teams;

"use client";

import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";
import videoSrc from "./public/videos/1.mp4";
import { Lora } from "next/font/google";
import Card from "@/components/Card";
import Teams from "@/components/Teams";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid  grid-cols-3  grid-rows-[350px_minmax(350px,1fr)_100px] relative">
      <div
        className="col-span-3 row-span-1 row-start-1
      lg:h-auto md:h-full 2xl:row-span-2 2xl:border"
      >
        <div className=" w-full h-full md:h-full lg:h-full xl:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-center object-cover md:object-fill "
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Link
        href="/teams"
        className="row-start-2 col-span-3  row-auto
      absolute -top-4 w-full
      md:top-0 md:h-auto
      lg:h-auto 
      2xl:row-start-3
      "
      >
        <Teams />
      </Link>
      <div className="row-start-3">8</div>
      <div className="row-start-4">9</div>
    </div>
  );
}

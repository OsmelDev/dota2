"use client";
import { team } from "@/app/types/teams.types";
import React, { useState } from "react";
import Modal from "./Modal";
interface TeamProps {
  team: team;
}

export const TeamsCard = ({ team }: TeamProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-purple-600 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative">
          <img
            className="w-full h-48 object-cover opacity-70"
            src={
              team.logo_url ||
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt={`${team.name} cover`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

          <div className="absolute h-[69px] bottom-4 pl-2 pr-2 flex items-center w-full">
            <img
              className={`${
                team.logo_url === null
                  ? "hidden"
                  : "w-16 h-16 rounded-full border-2 border-yellow-400 bg-gray-800"
              }`}
              src={team.logo_url || "https://via.placeholder.com/150"}
              alt={`${team.name} logo`}
            />
            <h2
              className={`ml-4 text-xl font-bold text-white ${
                team.logo_url === null && "justify-center text-center"
              }`}
            >
              {team.name}
            </h2>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} team={team} />
    </>
  );
};

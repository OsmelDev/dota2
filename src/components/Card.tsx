import { team } from "@/app/types/teams.types";
import React, { useState } from "react";
import Modal from "./Modal";

interface CardProps {
  team: team;
}

const Card = ({ team }: CardProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="max-w-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex justify-center"
        onClick={() => setOpen(true)}
      >
        <div className="card">
          <div className="wrapper">
            <img
              src={
                team.logo_url ||
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              alt={`${team.name} cover`}
              className="cover-image rounded-2xl"
            />
          </div>
          <h2
            className={`ml-4 text-xl font-bold text-white ${
              team.logo_url === null && "justify-center text-center"
            }  title`}
          >
            {team.name}
          </h2>
          <img
            className={`character ${
              team.logo_url === null
                ? "hidden"
                : "w-16 h-16 rounded-full border-2 border-yellow-400 bg-gray-800"
            }`}
            src={team.logo_url || "https://via.placeholder.com/150"}
            alt={`${team.name} logo`}
          />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} team={team} />
    </>
  );
};

export default Card;

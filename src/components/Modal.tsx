import { team } from "@/app/types/teams.types";
import Link from "next/link";
import React from "react";

interface ModalProps {
  team: team;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ team, open, setOpen }: ModalProps) => {
  const lastMatch = team.last_match_time;
  const formatTime = (lastMatch: number) => {
    const date = new Date(lastMatch * 1000);
    date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const formattedTime = date.toLocaleTimeString("en-US");
    return formattedTime;
  };

  return (
    open && (
      <div
        className="fixed  w-full h-full top-0 left-0 flex justify-center items-center z-10 backdrop-blur-2xl "
        onClick={() => setOpen(false)}
      >
        <div className=" flex flex-col justify-center items-center w-[100%] h-[100%] ">
          <div
            className=" relative w-[100%] h-[80%] max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-purple-600 hover:border-yellow-400 transition-all duration-300 transform hover:cursor-pointer
          
          "
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
              <div className="absolute bottom-4 left-4 flex items-center">
                <img
                  className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-gray-800"
                  src={team.logo_url || "https://via.placeholder.com/150"}
                  alt={`${team.name} logo`}
                />
                <h2 className="ml-4 text-2xl font-bold text-white">
                  {team.name}
                </h2>
              </div>
            </div>

            <div className="px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-yellow-400">
                  {team.tag}
                </span>
              </div>

              <p className="text-gray-300 text-base mb-4">
                Last Match Time: {formatTime(lastMatch)}
              </p>

              <div className="flex justify-between text-center mt-4 border-t border-gray-700 pt-3">
                <div>
                  <p className="text-yellow-400 font-bold text-xl">
                    {team.wins || "0"}
                  </p>
                  <p className="text-gray-400 text-xs">Wins</p>
                </div>
                <div>
                  <p className="text-purple-400 font-bold text-xl">
                    {team.losses || "0"}
                  </p>
                  <p className="text-gray-400 text-xs">Defeats</p>
                </div>
                <div>
                  <p className="text-green-400 font-bold text-xl">
                    {team.rating || "?"}
                  </p>
                  <p className="text-gray-400 text-xs">Rating</p>
                </div>
              </div>
            </div>
            <Link
              href={`/team/details/${team.team_id}`}
              className="absolute z-10 border bottom-5 left-8 pt-1 pb-1 pl-3 pr-3 rounded-sm"
            >
              Details
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="absolute z-10 border bottom-5 right-8 pt-1 pb-1 pl-3 pr-3 rounded-sm"
            >
              close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

"use client";
import { match } from "@/app/types/teams.types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface MatchesProps {
  matches: match[];
}

const Matches = ({ matches }: MatchesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(matches.length / itemsPerPage);

  const getCurrentMatches = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return matches.slice(startIndex, endIndex);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 bg-[#0a0a0a] rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">Matches Played</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {getCurrentMatches().map((match) => {
          const duration = match.duration / 60;
          return (
            <Link
              href={`/match/${match.match_id}`}
              key={match.match_id}
              className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">
                  League: {match.league_name}
                </span>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-green-400 text-sm flex flex-col ">
                    {match.radiant ? "RADIANT" : "DIRE"}
                  </span>
                  <span
                    className={` text-sm flex flex-col ${
                      match.radiant_win ? "text-green-400" : "text-red-600"
                    }`}
                  >
                    {match.radiant_win ? "Win" : "Lose"}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center mt-2 text-sm text-gray-300">
                <Image
                  width={100}
                  height={100}
                  src={match.opposing_team_logo}
                  alt={`${match.opposing_team_name} logo`}
                  className="w-[60px] h-[60px]  border-2 border-transparent hover:border-yellow-400 transition-all object-cover rounded-full"
                />
                <span>VS: {match.opposing_team_name}/12</span>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-300">
                <span>Duration: {duration.toFixed(2)} min</span>
                <span className="text-green-400 text-sm flex flex-col ">
                  Score:{" "}
                  {match.radiant ? match.radiant_score : match.dire_score}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Anterior
        </button>

        <span className="text-white">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Matches;

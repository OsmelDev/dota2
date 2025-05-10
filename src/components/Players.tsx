import { player } from "@/app/types/teams.types";
import React, { useState } from "react";

interface PlayerProps {
  players: player[];
}

const Players = ({ players }: PlayerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(players.length / itemsPerPage);

  const getCurrentPlayers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return players.slice(startIndex, endIndex);
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
    <div className="p-6 bg-[#0a0a0a] rounded-lg border border-gray-700 ">
      <h3 className="text-xl font-bold text-purple-400 mb-4">Team Players</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {getCurrentPlayers().map((player) => (
          <div
            key={player.account_id}
            className={`flex items-center p-3 bg-gray-700 rounded-lg w-full 
              `}
          >
            <div className="ml-3 w-full">
              {player.name === null ? (
                <h4 className="text-white font-medium">Retired</h4>
              ) : (
                <h4 className="text-white  font-medium">{player.name}</h4>
              )}
              <p className="text-sm text-gray-400">
                Games Played: {player.games_played}
              </p>
              <p className="text-sm text-gray-400">Games Wins: {player.wins}</p>
              <span className="flex text-sm gap-3 w-full justify-end ">
                Current member:
                <p
                  className={`text-sm ${
                    player.is_current_team_member
                      ? "text-green-500"
                      : "text-red-600"
                  }`}
                >
                  {player.is_current_team_member ? "Yes" : "No"}
                </p>
              </span>
            </div>
          </div>
        ))}
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

export default Players;

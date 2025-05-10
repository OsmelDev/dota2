import { heroe } from "@/app/types/teams.types";
import React, { useState } from "react";

interface HeroesProps {
  heroes: heroe[];
}

const Heroes = ({ heroes }: HeroesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const totalPages = Math.ceil(heroes.length / itemsPerPage);

  const getCurrentHeroes = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return heroes.slice(startIndex, endIndex);
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
      <h3 className="text-xl font-bold text-blue-400 mb-4">Heroes Played</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {getCurrentHeroes().map((hero) => (
          <div
            key={hero.hero_id}
            className="text-center border pt-6 pb-6 rounded-xl h-[200px]"
          >
            <p className=" text-white">{hero.localized_name}</p>
            <p className="text-xs text-gray-400">
              Games played {hero.games_played}
            </p>
            <p className="text-xs text-gray-400">Wins: {hero.wins}</p>
            <p className="text-xs text-gray-400">Win rate: {45 + hero.wins}%</p>
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

export default Heroes;

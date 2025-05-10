"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Matches from "./Matches";
import Players from "./Players";
import Heroes from "./Heroes";
import { teamServices } from "@/services/teams.services";
import { heroe, match, player } from "@/app/types/teams.types";
import { ParamValue } from "next/dist/server/request/params";

type TabType = "Matches" | "Players" | "Heroes";

interface StateDataTeam {
  heroes: heroe[] | [];
  players: player[] | [];
  matches: match[] | [];
}

interface StepperComponentProps {
  id: ParamValue;
}

const StepperComponent = ({ id }: StepperComponentProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("Matches");
  const [dataTeam, setDataTeam] = useState<StateDataTeam>({
    heroes: [],
    players: [],
    matches: [],
  });
  const { getHeroesTeam, getPlayersTeam, getMachesTeam } = teamServices();

  const fetchData = async () => {
    const heroes = await getHeroesTeam(id);
    const players = await getPlayersTeam(id);
    const matches = await getMachesTeam(id);

    setDataTeam({
      heroes: heroes,
      players: players,
      matches: matches,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const tabContent: Record<TabType, ReactElement<any, any>> = {
    Matches: <Matches matches={dataTeam.matches} />,
    Players: <Players players={dataTeam.players} />,
    Heroes: <Heroes heroes={dataTeam.heroes} />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col ">
        <div className="flex flex-col sm:flex-row border-b border-gray-700">
          {(Object.keys(tabContent) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` px-6 py-3 text-lg font-medium focus:outline-none transition-colors duration-300 ${
                activeTab === tab
                  ? "text-yellow-400 border-b-2 border-b-gray-400 rounded-t-md border-[0.5px] border-gray-950 bg-[#0a0a0a]"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default StepperComponent;

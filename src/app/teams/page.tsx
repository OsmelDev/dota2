import { teamServices } from "@/services/teams.services";
import React from "react";
import Teams from "../views/Teams";

const page = async () => {
  const { getTeams } = teamServices();
  const teams = await getTeams();
  return (
    <>
      <Teams teams={teams} />
    </>
  );
};

export default page;

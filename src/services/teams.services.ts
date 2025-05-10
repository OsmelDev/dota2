import { dotaApi } from "@/instance/axios.instance";
import { ParamValue } from "next/dist/server/request/params";

export const teamServices = () => {
  const getTeams = async () => {
    try {
      const { data } = await dotaApi.get("/teams");
      return data;
    } catch (error) {
      alert(error);
    }
  };

  const getMachesTeam = async (id: ParamValue) => {
    try {
      const { data } = await dotaApi.get(`/teams/${id}/matches`);
      return data;
    } catch (error) {
      alert(error);
    }
  };

  const viewMatch = async (id: ParamValue) => {
    try {
      const { data } = await dotaApi.get(`/matches/${id}`);
      return data;
    } catch (error) {
      alert(error);
    }
  };

  const getPlayersTeam = async (id: ParamValue) => {
    try {
      const { data } = await dotaApi.get(`/teams/${id}/players`);
      return data;
    } catch (error) {
      alert(error);
    }
  };

  const getHeroesTeam = async (id: ParamValue) => {
    try {
      const { data } = await dotaApi.get(`/teams/${id}/heroes`);
      return data;
    } catch (error) {
      alert(error);
    }
  };
  return { getTeams, getMachesTeam, getPlayersTeam, getHeroesTeam, viewMatch };
};

import { dotaApi } from "@/instance/axios.instance";
import { ParamValue } from "next/dist/server/request/params";

export const rankingServices = () => {
  const getHeroRanking = async (id: ParamValue) => {
    try {
      const { data } = await dotaApi.get(`/rankings?hero_id=${id}`);
      return data;
    } catch (error) {
      alert(error);
    }
  };

  return { getHeroRanking };
};

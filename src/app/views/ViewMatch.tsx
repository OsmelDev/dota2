"use client";
import { teamServices } from "@/services/teams.services";
import { ParamValue } from "next/dist/server/request/params";
import React, { useEffect } from "react";

interface ViewMatchProps {
  id: ParamValue;
}

const ViewMatch = ({ id }: ViewMatchProps) => {
  const { viewMatch } = teamServices();
  const [match, setMatch] = React.useState<any>(null);

  useEffect(() => {
    const fetchMatch = async () => {
      const match = await viewMatch(id);
      setMatch(match);
    };
    fetchMatch();
  }, [id, viewMatch]);

  return (
    <div>
      ViewMatch
      <iframe
        src={match?.replay_url}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-[500px] border-0"
      />
    </div>
  );
};

export default ViewMatch;

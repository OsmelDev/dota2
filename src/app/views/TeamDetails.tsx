import React from "react";

interface TeamDetailsProps {
  id: number;
}

const TeamDetails = ({ id }: TeamDetailsProps) => {
  return <div>{id}</div>;
};

export default TeamDetails;

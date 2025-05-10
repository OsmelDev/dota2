import StepperComponent from "@/components/StepperTeam";
import { Params } from "next/dist/server/request/params";
import React from "react";

interface TeamDetailProps {
  params: Promise<Params>;
}

const page = async ({ params }: TeamDetailProps) => {
  const resolvedParams = await params;
  const id = await resolvedParams.id;

  return (
    <div>
      <StepperComponent id={id} />
    </div>
  );
};

export default page;

import ViewMatch from "@/app/views/ViewMatch";
import { Params } from "next/dist/server/request/params";

interface ParamsProps {
  params: Promise<Params>;
}

import React from "react";

const page = async ({ params }: ParamsProps) => {
  const resolverParams = await params;
  const id = resolverParams.id;
  return <ViewMatch id={id} />;
};

export default page;

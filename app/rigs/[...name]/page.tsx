import { getRigByName } from "@/app/manager/action";
import BackButton from "@/components/back-button";
import React from "react";

export default async function page({ params }: { params: { name: string } }) {
	const rig = await getRigByName(params.name[0]);
	if (!rig) <div>Not Found</div>;
	return (
		<div className="flex flex-col">
			<h1>{rig && rig.name}</h1>
			<span className="text-xs">Modified: {rig && rig.modifiedAt?.toLocaleString()}</span>
			<BackButton title="Voltar" />
		</div>
	);
}

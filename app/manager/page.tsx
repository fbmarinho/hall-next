import React from "react";
import { getAll } from "./action";
import DeleteButton from "./delete-button";
import RigCreateForm from "./create-form";
import RigEditForm from "./edit-form";
import ActivationButton from "./activation-button";

export default async function page() {
	const rigs = await getAll();

	return (
		<>
			<h1>Sondas</h1>
			<div className="flex flex-col gap-2">
				{rigs.map((rig) => (
					<div key={rig.id} className="flex items-center gap-2">
						<ActivationButton rig={rig} /> <RigEditForm rig={rig} /> <DeleteButton id={rig.id} />
					</div>
				))}
			</div>
			<RigCreateForm />
		</>
	);
}

"use client";

import { FormEvent, useState } from "react";
import { createRigWithName } from "./action";

export default function RigCreateForm() {
	const [rig, setRig] = useState("");
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (rig) {
			rig && createRigWithName(rig);
			setRig("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex gap-2 mt-4">
			<input name="name" placeholder="Ex. NS38" value={rig} onChange={(e) => setRig(e.currentTarget.value)} className="rounded border-2 px-3 py-1" />
			<button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
				Criar
			</button>
		</form>
	);
}

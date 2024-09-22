"use client";

import { Rig } from "@prisma/client";
import { useEffect, useState } from "react";
import { updateRig } from "./action";

export default function RigEditForm({ rig }: { rig: Rig }) {
	const [inputValue, setInputValue] = useState(rig.name);

	return (
		<input
			name="name"
			placeholder="Ex. NSXX"
			value={inputValue}
			onBlur={() => (inputValue ? updateRig({ ...rig, name: inputValue }) : setInputValue(rig.name))}
			onChange={(e) => setInputValue(e.currentTarget.value)}
			className="rounded border-2 px-3 py-1"
		/>
	);
}

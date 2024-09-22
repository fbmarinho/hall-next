"use client";

import { Trash2 } from "lucide-react";
import { deleteRig } from "./action";

export default function DeleteButton({ id }: { id: string }) {
	return (
		<button onClick={() => deleteRig(id)} className="text-white bg-red-500 p-2 rounded">
			<Trash2 size={15} />
		</button>
	);
}

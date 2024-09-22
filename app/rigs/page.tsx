import React from "react";
import { getAllActive } from "../manager/action";
import Link from "next/link";

export default async function page() {
	const rigs = await getAllActive();

	return (
		<>
			<h1>Sondas</h1>
			<div className="flex flex-col gap-2">
				{rigs.map((rig) => (
					<div key={rig.id} className="flex items-center gap-2">
						<Link href={`/rigs/${rig.name}`}>{rig.name}</Link>
					</div>
				))}
			</div>
		</>
	);
}

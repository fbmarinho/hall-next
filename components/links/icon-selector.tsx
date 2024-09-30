"use client";
import { icons } from "lucide-react";
import Icon from "@/components/icon";

export default function IconSelector({ select }: { select: (selected: string) => void }) {
	const iconNames = Object.keys(icons) as Array<keyof typeof icons>;

	return (
		<div className="flex flex-wrap p-1 border-2 rounded h-20 overflow-y-scroll">
			<button type="button" onClick={() => select("")} className="p-[4px] hover:bg-red-500 hover:text-white">
				Nenhum
			</button>
			{iconNames.map((iconName) => (
				<button key={iconName} type="button" onClick={() => select(iconName)} className="p-[4px] hover:bg-red-500 hover:text-white">
					<Icon name={iconName} size={12} />
				</button>
			))}
		</div>
	);
}

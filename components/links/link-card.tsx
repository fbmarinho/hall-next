import { Link as LinkType } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Icon from "../icon";
import LinkVisibilityToggle from "./link-visibility-toggle";
import LinkDeleteButton from "./link-delete-button";

export default function LinkCard({ link }: { link: LinkType }) {
	return (
		<div className="w-1/3">
			<Link href={link.href} target={link.target} className="relative h-[80px] m-[2px] rounded bg-white flex items-center justify-center gap-4 p-4 uppercase overflow-hidden">
				<div className="bg-yellow-400 text-[10px] font-medium flex items-end justify-center pb-1 w-[100px] h-[50px] absolute top-[-20px] left-[-45px] rotate-[-45deg]">NEW</div>
				<Icon name={link.icon} size={22} />
				<div className="flex flex-col items-center">
					<div className="text-xl font-bold">{link.title}</div>
					<div className="text-xs">{link.description}</div>
				</div>
				<div className="absolute bg-gray-200 bottom-0 right-0 w-[30px] h-[80px] flex flex-col items-center justify-around">
					<LinkVisibilityToggle link={link} />
					<Link href={"links/edit/" + link.id} className="text-green-800">
						<Icon name="Settings" size={15} />
					</Link>
					<LinkDeleteButton id={link.id} />
				</div>
			</Link>
		</div>
	);
}

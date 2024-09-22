"use client";

import { Link as LinkType } from "@prisma/client";
import Icon from "../icon";
import { ToogleActiveStatus } from "@/app/links/link-actions";
import Link from "next/link";

export default function LinkVisibilityToggle({ link }: { link: LinkType }) {
	return (
		<Link href={"#"} onClick={() => ToogleActiveStatus(link)} className="text-blue-900">
			<Icon name={link.active ? "Eye" : "EyeOff"} size={15} />
		</Link>
	);
}

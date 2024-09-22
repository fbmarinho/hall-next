"use client";

import { deletelink } from "@/app/links/link-actions";
import Icon from "../icon";
import Link from "next/link";

export default function LinkDeleteButton({ id }: { id: string }) {
	return (
		<Link href={"#"} onClick={() => deletelink(id)} className="text-red-500">
			<Icon name="Trash2" size={15} />
		</Link>
	);
}

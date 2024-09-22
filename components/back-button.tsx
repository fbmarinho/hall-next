"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function BackButton({ title, className, icon, children }: { title?: string; className?: string; icon?: ReactNode; children?: ReactNode }) {
	const router = useRouter();
	return (
		<div className={className || "flex w-fit text-white bg-gray-400 rounded cursor-pointer justify-center items-center gap-2 px-3 py-1"} onClick={() => router.back()}>
			{children || (
				<>
					{icon}
					{title || "Back"}
				</>
			)}
		</div>
	);
}

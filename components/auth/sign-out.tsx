"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
	return (
		<button onClick={() => signOut()} className="text-sm w-1/3">
			Sign Out
		</button>
	);
}

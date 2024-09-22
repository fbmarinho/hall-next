import { SignInButton } from "./auth/sign-in";
import { auth } from "@/auth/auth";
import UserCard from "@/components/auth/usercard";
import { SignOutButton } from "./auth/sign-out";
import Menu from "./menu";
import Link from "next/link";

export default async function Header() {
	const session = await auth();

	return (
		<div>
			<div className="flex px-4 py-2 justify-between w-full bg-red-700 text-white">
				<Link href={"/"}>Hallinks</Link>

				<div className="flex">
					{session?.user ? (
						<div className="flex gap-4">
							<UserCard user={session.user} />
							<SignOutButton />
						</div>
					) : (
						<SignInButton />
					)}
				</div>
			</div>
			{session && <Menu />}
		</div>
	);
}

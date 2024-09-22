import { User } from "next-auth";
import Image from "next/image";
export default function UserCard({ user }: { user: User }) {
	return (
		<div className="flex justify-center items-center gap-2 w-full">
			<Image src={user.image as string} alt="Avatar" width={32} height={32} className="rounded-full border-2" />
			<div className="flex flex-col">
				<span className="text-xs font-bold">{user.name}</span>
				<span className="text-xs">{user.email}</span>
			</div>
		</div>
	);
}

import Link from "next/link";

export default function Menu() {
	return (
		<div className="flex justify-around bg-black text-white">
			<Link href={"/rigs"}>Rigs</Link>
			<Link href={"/manager"}>Manager</Link>
		</div>
	);
}

import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex bg-black text-white text-xs p-3 w-full">
			<Link href={"/links/request"}>Request Link</Link>
		</div>
	);
}

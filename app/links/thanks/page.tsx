import Link from "next/link";

export default function Page() {
	return (
		<div className="flex flex-col">
			<span>Obrigado !</span>

			<Link href={"/links"} className="text-blue-500">
				Meus links
			</Link>
		</div>
	);
}

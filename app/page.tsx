import LinkCard from "@/components/links/link-card";
import { getActiveLinks } from "./links/link-actions";

export default async function Home() {
	const links = await getActiveLinks();

	return (
		<main>
			<div className="bg-black text-white text-xs rounded-t pt-1 px-2">Links</div>
			<div className="flex bg-black w-full flex-wrap p-[2px]">
				{links.map((link) => (
					<LinkCard link={link} />
				))}
			</div>
		</main>
	);
}

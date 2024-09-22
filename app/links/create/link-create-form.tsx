"use client";
import { icons } from "lucide-react";
import { createlink } from "../link-actions";
import { ChangeEvent, useState } from "react";
import Icon from "@/components/icon";
import LinkCard from "@/components/links/link-card";

export default function LinkCreateForm() {
	const iconNames = Object.keys(icons) as Array<keyof typeof icons>;
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [selectedIcon, setIcon] = useState<string>("Link");

	function handleChange(e: ChangeEvent<HTMLSelectElement>) {
		console.log();
	}

	return (
		<>
			<form action={createlink} className="flex flex-col gap-2">
				<div>
					<label htmlFor="icon">Ícone:</label>
					<select name="icon" className="border-2" onChange={(e) => setIcon(iconNames[e.currentTarget.options.selectedIndex])}>
						{iconNames.map((iconName) => (
							<option key={iconName} value={iconName} selected={selectedIcon == iconName}>
								{iconName}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="title">Título:</label>
					<input name="title" className="border-2" value={title} type="text" onChange={(e) => setTitle(e.currentTarget.value)} />
				</div>
				<div>
					<label htmlFor="description">Descrição:</label>
					<input name="description" className="border-2" value={description} type="text" onChange={(e) => setDescription(e.currentTarget.value)} />
				</div>
				<div className="flex w-full gap-2">
					<label htmlFor="href">URL:</label>
					<input name="href" className="border-2" type="text" placeholder="http://www.google.com" />

					<label htmlFor="target">Target:</label>
					<select name="target" className="border-2">
						<option value="_blank" selected>
							Nova janela
						</option>
						<option value="_self">Mesma janela</option>
					</select>
				</div>
				<div>
					<label htmlFor="type">Tipo:</label>
					<select name="type" className="border-2">
						<option value="" selected>
							Selecione
						</option>
						<option value="auth">Auth</option>
						<option value="vpn">VPN</option>
						<option value="direct">Direct</option>
						<option value="other">Other</option>
					</select>
				</div>

				<span>Preview:</span>
				<div className="bg-black p-1">
					<LinkCard link={{ icon: selectedIcon, title: title || "Título", description: description || "Descrição", href: "#", target: "none" }} />
				</div>
				<button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded" disabled={title == ""}>
					Solicitar
				</button>
			</form>
		</>
	);
}

"use client";
import { icons } from "lucide-react";
import { createlink } from "../link-actions";
import { MouseEvent, useState } from "react";
import Icon from "@/components/icon";
import LinkCardPreview from "@/components/links/link-card-preview";

export default function LinkCreateForm() {
	const iconNames = Object.keys(icons) as Array<keyof typeof icons>;
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [selectedIcon, setIcon] = useState<string>("Link");
	const [iconsvisible, setIconsVisibility] = useState(false);
	function handleChoose(e: MouseEvent<HTMLButtonElement>) {
		setIcon(e.currentTarget.id);
		setIconsVisibility(false);
	}

	return (
		<>
			<span>Preview:</span>
			<LinkCardPreview link={{ icon: selectedIcon, title: title || "Título", description: description || "Descrição" }} />
			<form action={createlink} className="flex flex-col gap-2">
				<div className="flex flex-wrap p-2 border-4 my-2 rounded h-20 overflow-y-scroll" style={{ display: iconsvisible ? "flex" : "none" }}>
					<button onClick={handleChoose} id="" className="p-1 hover:bg-red-500 hover:text-white">
						Nenhum
					</button>
					{iconNames.map((iconName) => (
						<button onClick={handleChoose} id={iconName} className="p-1 hover:bg-red-500 hover:text-white">
							<Icon name={iconName} size={12} />
						</button>
					))}
				</div>

				<div className="flex gap-2 w-full">
					<div className="w-1/12">
						<label htmlFor="icon">Ícone:</label>
						<input name="icon" type="hidden" value={selectedIcon} />
						<button onClick={() => setIconsVisibility(!iconsvisible)} className="w-full hover:bg-gray-300 flex items-center justify-center gap-2 bg-gray-200 p-2 rounded">
							<Icon name="Search" size={20} />
							<span>Selecionar</span>
						</button>
					</div>
					<div className="w-2/12">
						<label htmlFor="title">Título:</label>
						<input name="title" className="border-2 w-full p-2 rounded" value={title} type="text" onChange={(e) => setTitle(e.currentTarget.value)} />
					</div>
					<div className="w-3/12">
						<label htmlFor="description">Descrição:</label>
						<input name="description" className="border-2 w-full p-2 rounded" value={description} type="text" onChange={(e) => setDescription(e.currentTarget.value)} />
					</div>
					<div className="w-6/12">
						<label htmlFor="href">URL:</label>
						<input name="href" className="border-2 w-full p-2 rounded" type="text" placeholder="http://www.google.com" />
					</div>
				</div>
				<div className="flex gap-2 w-full">
					<div className="w-1/2">
						<label htmlFor="target">O link deve abrir:</label>
						<select name="target" className="border-2 w-full p-2 rounded">
							<option value="_blank" selected>
								Em uma nova janela
							</option>
							<option value="_self">Na mesma janela</option>
						</select>
					</div>
					<div className="w-1/2">
						<label htmlFor="type">Tipo de autenticação necessária:</label>
						<select name="type" className="border-2 w-full p-2 rounded">
							<option value="direct" selected>
								Nenhuma
							</option>
							<option value="auth">Microsoft Authenticator</option>
							<option value="vpn">VPN</option>
							<option value="other">Outro tipo</option>
						</select>
					</div>
				</div>
				<button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded" disabled={title == ""}>
					Solicitar inclusão
				</button>
			</form>
		</>
	);
}

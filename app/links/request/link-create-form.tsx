"use client";

import { createlink, FormState } from "../link-actions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import LinkCardPreview from "@/components/links/link-card-preview";
import IconSelector from "@/components/links/icon-selector";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/form-submit-button";

export default function LinkCreateForm() {
	const router = useRouter();
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [href, setHref] = useState<string>("");

	const [selectedIcon, setIcon] = useState<string>("Link");

	const initialState: FormState = {
		message: "",
		error: "",
	};

	const [formstate, formAction] = useFormState(createlink, initialState);

	useEffect(() => {
		if (formstate.message == "ok") {
			router.push("/links/thanks");
		}
	}, [formstate]);

	return (
		<>
			<form action={formAction} className="flex flex-col gap-2">
				<span>Selecione o ícone:</span>
				<IconSelector select={(i) => setIcon(i)} />
				<input type="hidden" name="icon" value={selectedIcon} />
				<div className="flex gap-2 w-full">
					<div className="w-3/12">
						<label htmlFor="title">Título:</label>
						<input name="title" className="border-2 w-full p-2 rounded" value={title} type="text" onChange={(e) => setTitle(e.currentTarget.value)} />
					</div>
					<div className="w-3/12">
						<label htmlFor="description">Descrição:</label>
						<input name="description" className="border-2 w-full p-2 rounded" value={description} type="text" onChange={(e) => setDescription(e.currentTarget.value)} />
					</div>
					<div className="w-6/12">
						<label htmlFor="href">URL:</label>
						<input name="href" className="border-2 w-full p-2 rounded" type="text" value={href} onChange={(e) => setHref(e.currentTarget.value)} placeholder="http://www.google.com" />
					</div>
				</div>
				<div className="flex gap-2 w-full">
					<div className="w-1/2">
						<label htmlFor="target">O link deve abrir:</label>
						<select name="target" className="border-2 w-full p-2 rounded" defaultValue="_blank">
							<option value="_blank" defaultChecked>
								Em uma nova aba
							</option>
							<option value="_self">Na mesma aba</option>
							<option value="popup">Em um popup</option>
						</select>
					</div>
					<div className="w-1/2">
						<label htmlFor="type">Tipo de autenticação necessária:</label>
						<select name="type" className="border-2 w-full p-2 rounded" defaultValue="direct">
							<option value="direct">Nenhuma</option>
							<option value="auth">Microsoft Authenticator</option>
							<option value="vpn">VPN</option>
							<option value="other">Outro tipo</option>
						</select>
					</div>
				</div>
				<span>Preview:</span>
				<LinkCardPreview link={{ icon: selectedIcon, title: title || "Título", description: description || "Descrição" }} />
				<SubmitButton title="Solicitar inclusão" />
				{/* <pre>{JSON.stringify(formstate, null, 2)}</pre> */}
			</form>
		</>
	);
}

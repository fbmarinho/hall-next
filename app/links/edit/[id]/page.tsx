import React from "react";
import { getLinkById } from "../../link-actions";
import LinkEditForm from "./link-edit-form";

export default async function Page({ params }: { params: { id: string } }) {
	const link = await getLinkById(params.id);

	return link && <LinkEditForm link={link} />;
}

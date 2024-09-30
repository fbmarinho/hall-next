"use server";

import prisma from "@/utils/db";
import { Link } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type FormState = {
	message: "";
	error: "";
};

/** Get a link */
export async function getLinkByTitle(title: string) {
	return await prisma.link.findFirst({ where: { title } });
}

/** Get a link */
export async function getLinkById(id: string) {
	return await prisma.link.findFirst({ where: { id } });
}

/** Get All links */
export async function getAll() {
	return await prisma.link.findMany({ orderBy: { id: "asc" } });
}

/** Get All Active links */
export async function getActiveLinks() {
	return await prisma.link.findMany({ where: { active: true }, orderBy: { id: "asc" } });
}

/** Create link */
export async function createlink(action: FormState, data: FormData) {
	const icon = data.get("icon") as string;
	const title = data.get("title") as string;
	const description = data.get("description") as string;
	const href = data.get("href") as string;
	const target = data.get("target") as string;
	const type = data.get("type") as string;

	if (title == "" || href == "") {
		return {
			message: "",
			error: "Erro ao incluir dados !",
		};
	}

	const now = new Date(Date.now());
	const insert = await prisma.link.create({ data: { icon, title, description, href, target, type, modifiedAt: now } });

	if (!insert) {
		return {
			message: "",
			error: "Erro ao incluir dados !",
		};
	}

	return {
		message: "ok",
		error: "",
	};
}

/** Create link */
export async function updatelink(data: FormData) {
	const id = data.get("id") as string;
	const icon = data.get("icon") as string;
	const title = data.get("title") as string;
	const description = data.get("description") as string;
	const href = data.get("href") as string;
	const target = data.get("target") as string;
	const type = data.get("type") as string;

	const now = new Date(Date.now());
	const update = await prisma.link.update({ where: { id }, data: { icon, title, description, href, target, type, modifiedAt: now } });
	revalidatePath("/links");
}

/** Tootle active status */
export async function ToogleActiveStatus(link: Link) {
	const now = new Date(Date.now());
	const _link = await prisma.link.update({ where: { id: link.id }, data: { active: !link.active, modifiedAt: now } });
	revalidatePath("/links");
}

/** Delete link */
export async function deletelink(id: string) {
	const now = new Date(Date.now());
	const link = await prisma.link.delete({ where: { id } });
	revalidatePath("/links");
}

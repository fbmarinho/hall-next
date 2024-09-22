"use server";

import prisma from "@/utils/db";
import { Rig } from "@prisma/client";
import { revalidatePath } from "next/cache";

export type FormState = {
	message: "";
	error: "";
};

/** Get a Rig */
export async function getRigByName(name: string) {
	return await prisma.rig.findFirst({ where: { name } });
}

/** Get All Rigs */
export async function getAll() {
	return await prisma.rig.findMany({ orderBy: { id: "asc" } });
}

/** Get All Active Rigs */
export async function getAllActive() {
	return await prisma.rig.findMany({ where: { active: true }, orderBy: { id: "asc" } });
}

/** Create Rig */
export async function createRigWithName(name: string) {
	if (name) {
		const now = new Date(Date.now());
		const insert = await prisma.rig.create({ data: { name, modifiedAt: now } });
		revalidatePath("/rigs");
	}
}

/** Update Rig */
export async function updateRig(rig: Rig) {
	if (rig.name) {
		const now = new Date(Date.now());
		const update = await prisma.rig.update({ where: { id: rig.id }, data: { ...rig, modifiedAt: now } });
		revalidatePath("/rigs");
	}
}

/** Tootle active status */
export async function ToogleActiveStatus(rig: Rig) {
	const now = new Date(Date.now());
	const _rig = await prisma.rig.update({ where: { id: rig.id }, data: { active: !rig.active, modifiedAt: now } });
	revalidatePath("/rigs");
}

/** Delete Rig */
export async function deleteRig(id: string) {
	const now = new Date(Date.now());
	const rig = await prisma.rig.delete({ where: { id } });
	revalidatePath("/rigs");
}

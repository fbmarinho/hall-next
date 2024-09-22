"use client";

import { Rig } from "@prisma/client";
import { ToogleActiveStatus } from "./action";

export default function ActivationButton({ rig }: { rig: Rig }) {
	return <input type="checkbox" checked={rig.active} onClick={() => ToogleActiveStatus(rig)} />;
}

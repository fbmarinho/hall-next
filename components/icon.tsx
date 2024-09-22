"use client";
import { icons } from "lucide-react";

const Icon = ({ name, size }: { name: string; size: number }) => {
	const LucideIcon = icons[name as keyof typeof icons];
	if (!LucideIcon) {
		return null; // Trate o caso de um ícone inválido
	}
	return <LucideIcon size={size} />;
};

export default Icon;

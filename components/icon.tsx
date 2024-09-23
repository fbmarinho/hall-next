"use client";
import { icons } from "lucide-react";

const Icon = ({ name, size, color }: { name: string; size: number; color?: string }) => {
	const LucideIcon = icons[name as keyof typeof icons];
	if (!LucideIcon) {
		return null; // Trate o caso de um ícone inválido
	}
	return <LucideIcon size={size} color={color} />;
};

export default Icon;

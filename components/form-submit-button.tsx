"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }: { title: string }) {
	const { pending } = useFormStatus();

	return (
		<button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded" disabled={pending}>
			{title}
		</button>
	);
}

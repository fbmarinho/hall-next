import Icon from "../icon";

export default function LinkCardPreview({ link }: { link: { icon: string; title: string; description: string } }) {
	return (
		<div className="w-full bg-black p-1">
			<div className="relative h-[80px] m-[2px] rounded bg-white flex items-center justify-center gap-4 p-4 uppercase overflow-hidden">
				<div className="bg-yellow-400 text-[10px] font-medium flex items-end justify-center pb-1 w-[100px] h-[50px] absolute top-[-20px] left-[-45px] rotate-[-45deg]">NEW</div>
				<Icon name={link.icon} size={22} />
				<div className="flex flex-col items-center">
					<div className="text-xl font-bold">{link.title}</div>
					<div className="text-xs">{link.description}</div>
				</div>
				<div className="absolute bg-gray-200 bottom-0 right-0 w-[30px] h-[80px] flex flex-col items-center justify-around">
					<Icon name="EyeOff" size={15} color="navy" />
					<Icon name="Settings" size={15} color="green" />
					<Icon name="Trash2" size={15} color="red" />
				</div>
			</div>
		</div>
	);
}

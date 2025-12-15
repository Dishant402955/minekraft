import { useStore } from "../hooks/useStore";

export const Menu = () => {
	// @ts-ignore
	const saveWorld = useStore((state) => state.saveWorld);
	// @ts-ignore
	const resetWorld = useStore((state) => state.resetWorld);

	return (
		<div className="absolute top-2.5 left-2.5">
			<button
				onClick={() => saveWorld()}
				className="text-sm border-2 px-4 py-2 m-2"
			>
				Save
			</button>
			<button
				onClick={() => resetWorld()}
				className="text-sm border-2 px-4 py-2"
			>
				Reset
			</button>
		</div>
	);
};
